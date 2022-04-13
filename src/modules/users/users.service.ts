import { Injectable } from '@nestjs/common';
import { mock } from 'mockjs';
import { coverImageList } from '../courses/data/course-cover';
import { courseInfoList } from '../courses/data/course-info-list';

@Injectable()
export class UsersService {
  public myOrder() {
    return mock({
      'data|2-3': [
        {
          // 1到3个套餐
          'id|+1': 1, //初始值1开始，每条+1
          orderId: /\d{15}/, // 订单id
          userId: 199, // 用户id
          'pricePayable|301-800.2': 1, //应付价格
          'priceDiscount|200-500.2': 1, //优惠价格
          'status|+1': [1, 2, 3], // 订单状态：1待支付，2交易成功，3交易关闭
          updateDate: '@datetime', // 修改时间
          createDate: '@datetime', // 创建时间
          'courseList|1-3': [
            {
              id: function () {
                return mock('@id');
              },
              userId: mock('@id()'),
              'nickName|1': ['@cname', 'tyyin'],
              avatar:
                'https://pic2.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xs.jpg?source=3af55fa1',

              'coverImage|+1': coverImageList,
              'info|+1': courseInfoList,
              totalTime: '@time', //总时长
              // studyTotal: '@integer(50, 1000)',
              studyTotalFloat: '@float(0, 5, 0, 1)', // 在学人数
              commTotal: '@integer(0, 600)', // 好评数
              browserCount: '@integer(0, 10000)',
              'isFree|1': [0, 1], //是否免费
              priceOriginal: function () {
                return mock('@integer(350, 700)') + '.98';
              }, //原价, 501到800之间随机数，小数点2位
              priceDiscount: function () {
                return mock('@integer(60, 300)') + '.98';
              }, //优惠价
            },
          ],
        },
      ],
    });
  }
}
