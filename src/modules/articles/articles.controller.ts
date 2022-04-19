import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ArticlesService } from './articles.service';

@Controller('articles')
@ApiTags('阅读文章模块')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  @ApiOperation({ summary: '获取文章详情' })
  public getArticleDetail() {
    return this.articlesService.getArticleDetail().data;
  }

  @Get('comment')
  @ApiOperation({ summary: '获取文章详情' })
  public getArticleCommentById() {
    return this.articlesService.getArticleCommentById().data;
  }
}
