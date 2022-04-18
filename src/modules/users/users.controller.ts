import { Controller, Get, Post, Headers, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('users')
@ApiTags('用户模块')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('getInfo')
  @ApiOperation({ summary: '获取用户信息' })
  public getInfo(
    @Headers('Authorization') token,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.usersService.getInfo(token, res);
  }

  @Get('getInfo/wx')
  @ApiOperation({ summary: '微信获取用户信息' })
  public wxGetInfo(
    @Headers('Authorization') token,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.usersService.getInfo(token, res, true);
  }

  @Get('course')
  @ApiOperation({ summary: '我的课程' })
  public getMyCourse() {
    return this.usersService.getMyCourse().data;
  }
}
