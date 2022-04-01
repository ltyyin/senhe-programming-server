import { Injectable } from '@nestjs/common';
import { mock, Random } from 'mockjs';
import { mainCovers } from '../courses/data/main-covers';
import { courseInfoList } from '../courses/data/course-info-list';

@Injectable()
export class SearchService {
  public async getHotList() {
    return await mock({
      'list|5-10': [
        {
          'title|+1': [
            'html',
            'css',
            'js',
            'jquery',
            'Vue3',
            'Ajax',
            'Mock.js',
            'TypeScript',
            'uniApp',
            '小程序',
          ],
        },
      ],
    });
  }

  public async getCourseList(params: {
    basisSort: string;
    content: string;
    count: string;
    isFreeSort: string;
  }) {
    let list = params.count ? `list|${params.count}` : 'list|10';
    let isFreeCourse: number | number[] = [0, 1];
    // 注意：0收费，1免费
    switch (params.isFreeSort) {
      case '收费课程':
        isFreeCourse = [0];
        break;
      case '免费课程':
        isFreeCourse = [1];
    }

    return await mock({
      data: {
        total: '@integer(30, 50)', // 总记录数
        'mainCover|1': mainCovers,
        [list]: [
          {
            id: function () {
              return mock('@id');
            },
            userId: function () {
              return mock('@guid');
            },
            'nickName|1': ['@cname'],
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
              return mock('@integer(310, 700)') + '.98';
            }, //原价, 501到800之间随机数，小数点2位
            priceDiscount: function () {
              return mock('@integer(60, 300)') + '.98';
            }, //优惠价
          },
        ],
      },
    });
  }

  public async getArticleList(params) {
    let list = params.count ? `list|${params.count}` : 'list|10';
    return await mock({
      data: {
        total: '@integer(50, 80)', // 总记录数
        [list]: [
          {
            //生成10条数据
            id: function () {
              return mock('@id');
            },
            userId: function () {
              return mock('@guid');
            },
            nickName: '@cname', // 发布者昵称
            title: '@cparagraph(1, 3)', // 标题
            summary: '@csentence(50, 100)',
            'imageUrl|+1': [
              null,
              'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/151bfcff5f4e4c1f8a5dafb1985f4c25~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
              'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ddd60228f5645ea971fabf6b85b637f~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
              'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7100728093cd43e28ace1c746ea4ad84~tplv-k3u1fbpfcp-no-mark:720:720:720:480.awebp?',
              'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ff3474ba9fc451395507eebb13098f5~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
              'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51b5d7c3d0a047faa7995780bbcc2e02~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
              'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93372aeb03c84eaba31743651f750976~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            ],
            viewCount: '@integer(0, 100000)', // 浏览次数
            thumhup: '@integer(0, 100000)', // 点赞数
            updateDate: '@datetime',
            praiseCount: '@integer(0, 999)',
            commentCount: '@integer(0, 300)',
            'tag|+1': [
              'Vue.js',
              'TypeScript',
              'uniApp',
              'JavaScript',
              'Ajax',
              'HTML',
            ],
          },
        ],
      },
    });
  }

  public async getQuestionList(params) {
    let list = params.count ? `list|${params.count}` : 'list|10';
    return mock({
      data: {
        total: '@integer(50, 60)', // 总记录数
        [list]: [
          {
            // id: function () {
            //   return mock('@id');
            // },
            id: '@id',
            userId: '@guid',
            nickName: '@cname',
            userImage: '@image(200x100, #50B347, #FFF, Mock.js)',
            title: '@cparagraph(1, 3)', // 标题
            viewCount: '@integer(5, 300)', // 浏览数
            thumhup: '@integer(2, 20)', // 点赞数
            reply: '@integer(2, 20)', // 回复数
            questionCount: '@integer(1, 50)',
            status: 1, //  1：未解决，2：已解决
            createDate: '@datetime',
            updateDate: '@datetime',
          },
        ],
      },
    });
  }
}
