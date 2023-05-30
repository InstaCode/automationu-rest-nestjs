import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getPort(): number {
    return this.configService.get<number>('port');
  }

  getRedisConfig(): { host: string; port: number } {
    return this.configService.get('redis');
  }
  getDatabaseConfig(): {
    host: string;
    port: number;
    name: string;
    username: string;
    password: string;
  } {
    return {
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      name: this.configService.get<string>('DB_NAME'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
    };
  }
}
