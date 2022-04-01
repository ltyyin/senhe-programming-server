import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './modules/courses/courses.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { SearchModule } from './modules/search/search.module';
import { CourseDetailsModule } from './modules/course-details/course-details.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CoursesModule,
    CategoriesModule,
    SearchModule,
    CourseDetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
