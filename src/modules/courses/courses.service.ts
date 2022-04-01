import { Injectable, StreamableFile } from '@nestjs/common';
import { mock, Random } from 'mockjs';
import { localBannerList } from './data/banner-list';
import { newsList } from './data/news-list';
import { categoryList } from './data/category-list';
import { courseInfoList } from './data/course-info-list';
import { mainCovers } from './data/main-covers';
import { createReadStream } from 'fs';
import { join } from 'path';
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
            // mockImage: Random.image('300x168', '#50B347', '#FFF', 'Mock.js'),
            'mockImage|+1': [
              'https://atts.w3cschool.cn/attachments/cover/cover_coding_interview_data_structure_questions_camp.png?t=1609299739',
              'https://atts.w3cschool.cn/attachments/cover/cover_coding_interview_algorithm_questions_camp.png?t=1609299470',
              'https://atts.w3cschool.cn/attachments/cover/cover_advanced_algorithm_camp.png?t=1623935823',
              'https://atts.w3cschool.cn/attachments/cover/cover_ecmascript6.png?t=1634192587',
              'https://atts.w3cschool.cn/attachments/cover/cover_puybn.png?t=1634193390',
              'https://atts.w3cschool.cn/attachments/cover/cover_tsminicourse.jpeg?t=1634191845',
              'https://atts.w3cschool.cn/attachments/cover/cover_orbls.jpeg?t=1624339359',
              'https://atts.w3cschool.cn/attachments/cover/cover_htmlcourse.png?t=1647503068',
            ],
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
