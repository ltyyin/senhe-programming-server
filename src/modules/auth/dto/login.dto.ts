import { ApiProperty } from '@nestjs/swagger';

/**
 * 校验用户登录输入内容的Dto
 */
export class LoginDto {
  @ApiProperty({ example: 'ltyyin', description: '用户账号' })
  username: string;
  @ApiProperty({ example: '12341234', description: '用户密码' })
  password: string;
}
