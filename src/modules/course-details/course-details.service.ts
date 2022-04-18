import { Injectable } from '@nestjs/common';
import { mock } from 'mockjs';

@Injectable()
export class CourseDetailsService {
  public async getCourseDetailSummary(id: string, free = '') {
    const isFree = free === '' ? [0, 1] : [parseInt(free)];
    return await mock({
      data: {
        id: '@id()',
        userId: function () {
          return mock('@id');
        },
        // 0 没有购买，1 表示已经购买
        'isBuy|1': [0],
        'nickName|1': '@cname',
        userImage:
          'https://pic2.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xs.jpg?source=3af55fa1',
        userSummary: '@csentence',
        'title|1': [
          'Node.js 入门课程',
          'TypeScript 入门到进阶课程',
          '小白学前端：简单易懂的CSS教程',
          '微信小程序入门课程',
        ], // 标题
        totalTime: '@time', //总时长
        studyTotal: '@integer(100, 700)', // 在学人数
        'goodRate|1': [4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0], //好评分数
        'coverImage|1': [
          'https://7n.w3cschool.cn/attachments/image/201910/big_67708_1378947.jpg?t=1571292388',
          'https://atts.w3cschool.cn/attachments/cover/cover_orbls.jpeg?t=1624339359',
          'https://atts.w3cschool.cn/attachments/cover/cover_puybn.png?t=1634193390',
          'https://atts.w3cschool.cn/attachments/cover/cover_ecmascript6.png?t=1634192587',
          'https://atts.w3cschool.cn/attachments/cover/cover_vuecourse.jpeg?t=1634191646',
          'https://atts.w3cschool.cn/attachments/cover/cover_tsminicourse.jpeg?t=1634191845',
        ],
        'isFree|1': isFree, // 0 付费，1免费
        priceOriginal: function () {
          return mock('@integer(350, 700)') + '.98';
        }, //原价, 501到800之间随机数，小数点2位
        priceDiscount: function () {
          return mock('@integer(60, 300)') + '.98';
        }, //优惠价
        'sectionCount|10-100': 1,
        'dot|10-100': 1,
        'detailContent|1': [
          '<div class="courseinfo-intro content-intro"><h3><img src="https://atts.w3cschool.cn/attachments/image/20191112/1573542277137487.png" alt="VUE微课课程介绍" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 15px;"><br></h3><h2>购买须知</h2><p>1. 完成6单元知识点和练习；</p><p>2. 适合人群：具有HTML、CSS、JavaScript&nbsp;基础知识的学员；</p><p>3. 在课程学习中，如有任何使用上的问题，请联系客服。</p></div>',
          '<div class="courseinfo-intro content-intro"><blockquote><h3><span style="font-size: 15px; font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;">Node.js&nbsp;是一个基于 Chrome V8 引擎的&nbsp;JavaScript&nbsp;运行环境。&nbsp;Node.js&nbsp;使用了一个事件驱动、非阻塞式 I/O 的模型。Node&nbsp;是一个让 JavaScript 运行在服务端的开发平台，它让 JavaScript 成为与PHP、Python、Perl、Ruby 等服务端语言平起平坐的脚本语言。</span><br></h3></blockquote><p><img src="https://atts.w3cschool.cn/attachments/image/20190809/1565354498155652.png" alt="nodejs微课课程介绍" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 15px;"></p><h2>购买须知</h2><p>1. 完成7单元知识点和4项测验任务；</p><p>2. 适合人群：具有JavaScript&nbsp;基础知识的学员。</p></div>',
          '<div class="courseinfo-intro content-intro"><h3><img src="https://atts.w3cschool.cn/attachments/image/20191226/1577330161766305.png" alt="ECMAScript6微课-03" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 15px;"><br></h3><h2>购买须知</h2><p>1.&nbsp;完成4单元知识点学习与练习</p><p>2.&nbsp;适合人群：已具备JavaScript基础，已熟悉正则。</p><p>3. 在课程学习中，如有任何使用上的问题，请联系客服。</p></div>',
          `<div class="courseinfo-intro content-intro"><blockquote><h3><span style="font-size: 15px; font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif;">TypeScript&nbsp;是一种由微软开发的自由和开源的编程语言。它是 JavaScript&nbsp;的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。</span><br></h3></blockquote><h3><img src="https://atts.w3cschool.cn/attachments/image/20190730/1564459626814878.png" alt="TS微课课程介绍" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, &quot;Source Han Sans SC&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 15px;"></h3>
          <h2>购买须知</h2>
          <p>1. 完成3单元知识点与练习；&nbsp;</p><p>2. 适合人群：具有JavaScript基础的学员；中级前端开发工程师；</p><p>3. 在课程学习中，如有任何使用上的问题，请联系客服。</p></div>`,
        ],
        courseSummary: '@cparagraph(1, 3)',
        nickName: '@cname',
        studyTotalFloat: '@float(0, 5, 0, 1)', // 在学人数
      },
    });
  }

  public async getChapterSection() {
    return await mock({
      'data|8-30': [
        {
          id: function () {
            return mock('@id');
          },
          title: '@ctitle', // 7到15个字
          'sectionList|3-18': [
            //课节信息
            {
              id: '@id',
              courseName: '@ctitle(5, 10)', // 7到15个字
              'isTry|1': [0, 1], // 是否付费（0付费，1免费）
              duration: '@datetime("mm:ss")', // 单个视频的时长
              'videoUrl|+1': [
                'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/a876efc0-4f35-11eb-97b7-0dc4655d6e68.mp4',
                'https://cdn.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_06B_Bali_1080p_013_preview.mp4',
                'https://cdn.videvo.net/videvo_files/video/free/2019-01/large_watermarked/181015_13_Venice Beach Drone_25_preview.mp4',
                'https://cdn.videvo.net/videvo_files/video/free/2018-07/large_watermarked/180705_01_03_preview.mp4',
              ],
            },
          ],
        },
      ],
    });
  }

  public async getCourseRecommend(id: string) {
    return await mock({
      'data|3-10': [
        {
          id: '@id',
          parentId: '-1',
          userId: '@guid', // 评论者id
          nickName: '@cname',
          userImage:
            'https://pic2.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xs.jpg?source=3af55fa1',
          'isGood|1': [4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0],
          content: '@csentence', // 评论内容
          createDate: '@datetime',
          'children|1': [
            null,
            {
              // 老师回复
              id: function () {
                return mock('@id');
              },
              userId: function () {
                return mock('@id');
              }, // 回复者id
              nickName: '@cname', // 回复者昵称
              userImage:
                'https://pica.zhimg.com/v2-110aad5bb5754a05b709818b9387792b_xl.jpg?source=32738c0c',
              'content|1': [
                '@csentence',
                '社区的强大与否，很大一部分由生态决定。曾有一段时间我专注为 Vue.js 3 的核心做贡献，这也是我有信心完成这本书的最重要原因之一。',
              ],
              createDate: '@datetime',
            },
          ],
        },
      ],
    });
  }

  public async getVideoPlayList(id: string) {
    return await mock({
      data: {
        summary: '@cparagraph(1, 3)',
        'chapterList|8-30': [
          {
            id: function () {
              return mock('@id');
            },
            title: '@ctitle', // 7到15个字
            'sectionList|3-18': [
              {
                id: '@id',
                courseName: '@ctitle(5, 10)',
                videoUrl:
                  'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/a876efc0-4f35-11eb-97b7-0dc4655d6e68.mp4',
              },
            ],
          },
        ],
      },
    });
  }
}
