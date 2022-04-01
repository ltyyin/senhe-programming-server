import { Module } from '@nestjs/common';
import { CourseDetailsService } from './course-details.service';
import { CourseDetailsController } from './course-details.controller';

@Module({
  controllers: [CourseDetailsController],
  providers: [CourseDetailsService]
})
export class CourseDetailsModule {}
