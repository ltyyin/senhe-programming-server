import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('用户模块')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('order')
  @ApiOperation({ summary: '我的订单' })
  public myOrder() {
    return this.usersService.myOrder().data;
  }
}
