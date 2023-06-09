import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from '../courses/courses.module';
import { configuration } from '../config/configuration';
import { DataLoaderService } from '../courses/providers/dataloader.service';
import { Course } from '../courses/entities/course.entity';
import { TypeORMConfig } from '../config/typeorm.config';

@Module({
  imports: [
    CoursesModule,
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/config/environments/${
        process.env.NODE_ENV
      }.env`,
      load: [configuration],
    }),
    TypeOrmModule.forRoot(TypeORMConfig),
    TypeOrmModule.forFeature([Course]),
  ],
  controllers: [AppController],
  providers: [AppService, DataLoaderService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly dataLoaderService: DataLoaderService) {}

  async onApplicationBootstrap() {
    await this.dataLoaderService.loadJsonData();
  }
}
