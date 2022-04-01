import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CourseDetailsService } from './course-details.service';
import { DelayInterceptor } from 'src/interceptors/delay.interceptor';

function timer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, 2000);
  });
}

@Controller('course-details')
@ApiTags('课程详情模块')
export class CourseDetailsController {
  constructor(private readonly courseDetailsService: CourseDetailsService) {}

  @Get()
  @ApiOperation({ summary: '获取课程详情概述' })
  public async getCourseDetailSummary(@Query('id') id: string) {
    const res = await this.courseDetailsService.getCourseDetailSummary(id);
    // await timer();
    return res.data;
  }

  @Get('chapter')
  @ApiOperation({ summary: '获取课程章节列表' })
  public async getChapterSection(@Query('id') id: string) {
    const res = await this.courseDetailsService.getChapterSection();
    return res.data;
  }

  @Get('recommend')
  @ApiOperation({ summary: '获取课程评论列表' })
  public async getCourseRecommend(@Query('id') id: string) {
    const res = await this.courseDetailsService.getCourseRecommend(id);
    return res.data;
  }

  @Get('videoList')
  @ApiOperation({ summary: '获取课程视频播放列表' })
  @UseInterceptors(DelayInterceptor)
  public async getVideoPlayList(@Query('id') id: string) {
    const res = await this.courseDetailsService.getVideoPlayList(id);
    return res.data;
  }
}
