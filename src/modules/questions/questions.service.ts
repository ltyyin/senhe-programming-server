import { Injectable } from '@nestjs/common';
import { mock } from 'mockjs';
import dataArr from './data/question';

@Injectable()
export class QuestionsService {
  public getQuestionDetail() {
    return mock({
      code: 20000,
      message: '成功',
      data: {
        id: '10',
        userId: '1',
        nickName: '@cname',
        'userImage|1': [
          null,
          'https://pic2.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xs.jpg?source=3af55fa1',
        ],
        title: '@csentence', // 标题
        summary: '@csentence(50, 100)',
        viewCount: '@integer(0,100)',
        thumhup: '@integer(0,10)',
        // createDate: '@datetime',
        createDate: Date.now,
        updateDate: '@datetime', // 详情显示的时间
        pageViews: '@float(0, 30, 2, 2)',
        'isFollow|1': [0, 1],
        'content|1': dataArr,
      },
    });
  }

  public getQuestionCommentById() {
    return mock({
      code: 20000,
      message: '成功',
      'data|2-5': [
        {
          id: '@id',
          parentId: '-1', //父评论id
          'userId|+1': 1, // 评论者id
          nickName: '@cname',
          'userImage|1': [
            null,
            'https://pic2.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xs.jpg?source=3af55fa1',
          ],
          articleId: '10',
          content: '@csentence', // 评论内容
          createDate: Date.now(),
        },
      ],
    });
  }
}
