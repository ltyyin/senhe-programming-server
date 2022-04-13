import { Injectable, StreamableFile } from '@nestjs/common';
import { mock, Random } from 'mockjs';
import { localBannerList } from './data/banner-list';
import { newsList } from './data/news-list';
import { categoryList } from './data/category-list';
import { courseInfoList } from './data/course-info-list';
import { mainCovers } from './data/main-covers';
import { coverImageList } from './data/course-cover';
// import { CreateCourseDto } from './dto/create-course.dto';
// import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  public async getBannerList(count: string) {
    let data = `data|${count}`;
    return await mock({
      [data]: [
        {
          id: '@id',
          'imageUrl|+1': localBannerList,
          // imageUrl: '@image(1000x360, #50B347, #FFF, Mock.js)',
          advertUrl: '/pages/course/details?id=@id',
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
        isFreeCourse = [0];
        break;
      case 1:
        isFreeCourse = [1];
        break;
    }

    return await mock({
      data: {
        total: '@integer(30, 50)', // 总记录数
        'mainCover|1': mainCovers,
        // mainCover: '@image(1230x300, #50B347, #FFF, Mock.js)',
        [records]: [
          {
            id: function () {
              return mock('@id');
            },
            userId: mock('@id()'),
            'nickName|1': ['@cname', 'tyyin'],
            'coverImage|+1': coverImageList,
            'info|+1': courseInfoList,
            totalTime: '@time', //总时长
            studyTotal: '@integer(50, 1000)',
            studyTotalFloat: '@float(0, 5, 0, 1)', // 在学人数
            commTotal: '@integer(0, 600)', // 好评数
            browserCount: '@integer(0, 10000)',
            'isFree|1': isFreeCourse, //是否免费
            priceOriginal: function () {
              return mock('@integer(350, 700)') + '.98';
            }, //原价, 501到800之间随机数，小数点2位
            priceDiscount: function () {
              return mock('@integer(60, 300)') + '.98';
            }, //优惠价
          },
        ],
      },
    });
  }
}
