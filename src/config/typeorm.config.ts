import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { configuration } from './configuration';
import 'reflect-metadata';

export const TypeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: configuration().database.host,
  username: configuration().postgres.username,
  password: configuration().postgres.password,
  port: parseInt(configuration().database.port),
  database: configuration().postgres.database,
  entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
};
