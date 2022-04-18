import { IStrategyOptions, Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

type user = { name: string; password: string };
let users: user[] = [
  { name: 'admin', password: '12341234' },
  { name: 'root', password: '12341234' },
  { name: 'ltyyin', password: '123123123' },
];

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor() {
    super({
      usernameField: 'username',
      passwordField: 'password',
    } as IStrategyOptions);
  }

  async validate(username: string, password: string): Promise<any> {
    let currentUser: user = users.find((user: user) => {
      return user.name === username;
    });

    if (!currentUser) {
      throw new ForbiddenException('该用户未注册');
    }

    if (currentUser.password !== password) {
      throw new ForbiddenException('密码不正确');
    }

    return currentUser;
  }
}
