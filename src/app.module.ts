import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';

/* 앱 모듈 - 가장 기본이 되는 모듈 */

@Module({
  imports: [BoardsModule],
})
export class AppModule {}
