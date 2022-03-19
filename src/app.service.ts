import { Injectable } from '@nestjs/common';
import { mock, Random } from 'mockjs';

@Injectable()
export class AppService {
  getHello(): string {
    // return 'Hello World!';
    // return mock('@string');
    return Random.title();
  }
}
