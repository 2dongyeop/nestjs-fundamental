import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

//nest cli를 이용하면 아래와 같이 모듈 등록은 자동으로 됨
@Module({
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
