import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { configuration } from './config/configuration';
import { OpenApiNestFactory } from 'nest-openapi-tools';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await OpenApiNestFactory.configure(
    app,
    new DocumentBuilder().setTitle('AutomationU REST API'),
  );
  await app.listen(configuration().port);
}
bootstrap();
