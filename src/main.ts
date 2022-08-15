import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/* 프로젝트 시작점 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
