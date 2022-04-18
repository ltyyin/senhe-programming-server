import {
  Body,
  Controller,
  Post,
  UseGuards,
  Headers,
  Res,
  HttpStatus,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorator/current-user.decorator';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller('auth')
@ApiTags('验证模块')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  @ApiOperation({ summary: '登录验证' })
  @UseGuards(AuthGuard('local'))
  public login(@Body() loginDto: LoginDto, @CurrentUser() account) {
    return this.authService.getToken(account);
  }

  @Post('login/code')
  @ApiOperation({ summary: '验证码登录' })
  public phoneLogin(@Body() data) {
    return this.authService.getToken({ phoneNum: data.phoneNum });
  }

  @Post('login/wx')
  @ApiOperation({ summary: '微信登录' })
  public wxLogin(@Body() data) {
    console.log(data);
    return this.authService.getToken({ code: data.code });
  }

  @Get('refresh/token')
  @ApiOperation({ summary: '刷新token' })
  @ApiBearerAuth()
  public refreshToken(
    @Headers('Authorization') token,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const { phoneNum } = this.jwtService.verify(token.replace('Bearer ', ''));
      const newToken = this.jwtService.sign({ phoneNum }, { expiresIn: '3m' });
      return {
        code: 20000,
        token: newToken,
      };
    } catch (err) {
      res.status(HttpStatus.UNAUTHORIZED);
      res.send({ code: 50008, message: '无效令牌，请重新登录！' });
    }
  }
}
