import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  @ApiOperation({ summary: '获取文章详情' })
  public getQuestionDetail() {
    return this.questionsService.getQuestionDetail().data;
  }

  @Get('comment')
  @ApiOperation({ summary: '获取文章评论' })
  public getQuestionCommentById() {
    return this.questionsService.getQuestionCommentById().data;
  }
}
