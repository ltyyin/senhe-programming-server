import { Injectable } from '@nestjs/common';
import { mock, Random } from 'mockjs';
import { categoryList } from './data/category-list';

@Injectable()
export class CategoriesService {
  public async getCategoryList() {
    let category = [
      '热门教程',
      'HTML/CSS',
      'JavaScript',
      '后端语言',
      '开发框架',
      '数据库',
      '移动开发',
      '服务器相关',
      '开发工具',
      '大数据',
      '网站建设',
      'HML教程',
    ];

    let data = [];
    for (let i = 0; i < 12; i++) {
      let res = mock({
        id: mock('@id'),
        name: category[i],
        'labelList|1-12': [
          {
            id: mock('@id'),
            'tag|1': categoryList,
            coverImage: Random.image('64x64', '#50B347', '#FFF', 'Mock.js'),
          },
        ],
      });
      data.push(res);
    }

    return data;
  }
}
