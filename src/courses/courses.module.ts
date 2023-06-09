import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { DataLoaderService } from './providers/dataloaderservice';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, DataLoaderService],
})
export class CoursesModule {}
