import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  public async getToken(userAccount: Object) {
    return {
      token: this.jwtService.sign(userAccount, { expiresIn: '3m' }),
      refreshToken: this.jwtService.sign(userAccount, { expiresIn: '25m' }),
    };
  }
}
