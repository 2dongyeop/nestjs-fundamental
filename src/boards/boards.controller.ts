import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

//@Controller 데코레이터를 사용하여 boards controller 생성
@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  //@Get, @Post 등등을 핸들러(Handler)라고 하는 컨트롤러 클래스 내의 메소드
  @Get()
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoard(@Param('id') id: string, @Body('status') status: BoardStatus) {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
