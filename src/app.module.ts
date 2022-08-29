import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './configs/typeorm.config';

/* 앱 모듈 - 가장 기본이 되는 모듈 */

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), BoardsModule],
})
export class AppModule {}
