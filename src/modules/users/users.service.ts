import { Injectable, HttpStatus } from '@nestjs/common';
import { mock } from 'mockjs';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { coverImageList } from '../courses/data/course-cover';
import { courseInfoList } from '../courses/data/course-info-list';

@Injectable()
export class UsersService {
  constructor(private readonly jwtService: JwtService) {}

  public getInfo(token: string, res: Response, isWx = false) {
    // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    try {
      let currentUser = this.jwtService.verify(token.replace('Bearer ', ''));
    } catch (err) {
      if (err.message == 'jwt malformed') {
        res.status(HttpStatus.UNAUTHORIZED);
        res.send({ code: 50008, message: '无效令牌，请重新登录！' });
      } else {
        res.status(HttpStatus.FORBIDDEN);
        res.send({ code: 50014, message: '令牌过期，请重新登录！' });
      }
      return;
    }

    // 微信的返回值
    if (isWx) {
      return mock({
        code: 20000,
        phone: '',
        birthday: Date.now(),
        grade: '@integer(1, 8)',
      });
    }

    return mock({
      code: 20000,
      name: '前端很棒',
      'phoneNum|1': [/1\d{10}/, null],
      avatar:
        'https://pic2.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xs.jpg?source=3af55fa1',
      'gender|1': [0, 1, 2],
      birthday: Date.now(),
      grade: '@integer(1, 8)',
    });
  }

  public getMyCourse() {
    return mock({
      'data|1-10': [
        {
          id: '@id',
          'coverImage|+1': coverImageList,
          'info|+1': courseInfoList,
          totalTime: '@time',
          section: '@integer(0, 200)',
          learnedSection: '@integer(2, 30)',
          progress: '@integer(30, 60)',
          isFree: 1,
        },
      ],
    });
  }
}
