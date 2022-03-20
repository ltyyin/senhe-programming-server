import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';

@Controller('categories')
@ApiTags('分类模块')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({ summary: '获取分类列表' })
  public async getCategoryList() {
    const res = await this.categoriesService.getCategoryList();
    return res;
  }
}
