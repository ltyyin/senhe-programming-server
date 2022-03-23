import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchService } from './search.service';

function timer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, 2000);
  });
}

@Controller('search')
@ApiTags('搜索模块')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('hotList')
  @ApiOperation({ summary: '获取热门搜索推荐' })
  public async getHotList(): Promise<[string]> {
    const res = await this.searchService.getHotList();
    return res.list;
  }

  @Get('courseList')
  @ApiOperation({ summary: '获取搜索课程列表' })
  public async getCourseList(@Query() params) {
    const res = await this.searchService.getCourseList(params);
    await timer();
    return res.data;
  }

  @Get('articleList')
  @ApiOperation({ summary: '获取搜索文章列表' })
  public async getArticleList(@Query() params) {
    const res = await this.searchService.getArticleList(params);
    await timer();
    return res.data;
  }

  @Get('questionList')
  @ApiOperation({ summary: '获取搜索问答列表' })
  public async getQuestionList(@Query() params) {
    const res = await this.searchService.getQuestionList(params);
    await timer();
    return res.data;
  }
}
