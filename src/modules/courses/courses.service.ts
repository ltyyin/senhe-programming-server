import { Injectable } from '@nestjs/common';
import { mock, Random } from 'mockjs';
import { localBannerList } from './data/banner-list';
import { newsList } from './data/news-list';
import { categoryList } from './data/category-list';
import { courseInfoList } from './data/course-info-list';
import { mainCovers } from './data/main-covers';
// import { CreateCourseDto } from './dto/create-course.dto';
// import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  public async getBannerList(count: string) {
    let data = `data|${count}`;
    return await mock({
      [data]: [
        {
          'id|+1': 1,
          'imageUrl|+1': localBannerList,
          advertUrl: '/pages/course/course-details?id=@id',
        },
      ],
    });
  }

  public async getNewsList() {
    return await mock({
      'data|3': [
        {
          'id|+1': 1,
          'content|+1': newsList,
        },
      ],
    });
  }

  public async getCategory(count: string) {
    let data = `data|${count}`;
    return await mock({
      [data]: [
        {
          'id|+1': 1,
          navUrl: '/pages/course/course-category?id=@id',
          'category|+1': categoryList,
        },
      ],
    });
  }

  public async getRecommend(count: string, isFree: number = 2) {
    let records = `records|${count}`;
    let isFreeCourse: number | number[] = [0, 1];

    // 注意：0收费，1免费
    switch (isFree) {
      case 0:
        isFreeCourse = 0;
        break;
      case 1:
        isFreeCourse = 1;
    }

    return await mock({
      data: {
        total: '@integer(30, 50)', // 总记录数
        'mainCover|1': mainCovers,
        [records]: [
          {
            'id|+1': 1,
            userId: mock('@id()'),
            'nickName|1': ['@cname', 'tyyin'],
            mockImage: Random.image('300x168', '#50B347', '#FFF', 'Mock.js'),
            'info|+1': courseInfoList,
            totalTime: '@time', //总时长
            studyTotal: '@integer(0, 10000)', // 在学人数
            commTotal: '@integer(0, 600)', // 好评数
            browserCount: '@integer(0, 10000)',
            'isFree|1': isFreeCourse, //是否免费
            'priceOriginal|310-1000': 1, //原价, 501到800之间随机数，小数点2位
            'priceDiscount|60-300': 1, //优惠价
          },
        ],
      },
    });
  }
}
