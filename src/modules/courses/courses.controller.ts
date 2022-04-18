import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
// import { CreateCourseDto } from './dto/create-course.dto';
// import { UpdateCourseDto } from './dto/update-course.dto';

function timer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, 1000);
  });
}

@Controller('courses')
@ApiTags('课程模块')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('BannerList')
  @ApiOperation({ summary: '获取首页轮播图列表' })
  public async getBannerList(@Query('count') count: string) {
    const res = await this.coursesService.getBannerList(count);
    return res.data;
  }

  @Get('newsList')
  @ApiOperation({ summary: '获取新闻列表' })
  public async getNewsList() {
    const res = await this.coursesService.getNewsList();
    return res.data;
  }

  @Get('category')
  @ApiOperation({ summary: '获取课程分类的nav列表' })
  public async getCategory(@Query('count') count: string) {
    const res = await this.coursesService.getCategory(count);
    // await timer();
    return res.data;
  }

  @Get('recommend')
  @ApiOperation({ summary: '获取推荐课程列表' })
  public async getRecommend(@Query('count') count: string) {
    const res = await this.coursesService.getRecommend(count);
    await timer();
    return res.data;
  }

  @Get('free')
  @ApiOperation({ summary: '获取免费课程列表' })
  public async getFree(@Query('count') count: string) {
    const res = await this.coursesService.getRecommend(count, 1);
    await timer();
    return res.data;
  }

  @Get('choicest')
  @ApiOperation({ summary: '获取精选课程列表' })
  public async getChoicest(@Query('count') count: string) {
    const res = await this.coursesService.getRecommend(count, 0);
    await timer();
    return res.data;
  }
}
