import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from '../entities/course.entity';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DataLoaderService {
  constructor(
    @InjectRepository(Course)
    private CourseRepository: Repository<Course>,
  ) {}

  async loadJsonData() {
    const filePath = path.resolve(
      __dirname,
      '../data/courses-clean-improved.json',
    );
    const jsonString = await fs.promises.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonString);

    // assuming the data in JSON file is an array
    for (const item of data) {
      await this.CourseRepository.save(item);
    }
  }
}
