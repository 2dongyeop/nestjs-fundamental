import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

//@Injectable 데코레이터를 이용해 앱 내에서 이 서비스를 이용할 수 있도록 함
//종속성을 주입한다고 이해할 수 있고, 서비스도 프로바이더에 속한다.
@Injectable()
export class BoardsService {
  constructor(
    /**
     * @InjectRepository를 이용해
     * 서비스에서 Repository를 이용한다고 알림
     */
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  //

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Can't find board with id ${id}`);
    }

    return found;
  }

  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //
  //   /**
  //    * 찾으려는 id의 정보가 없을 경우 예외를 던짐
  //    */
  //
  //   if (!found) {
  //     throw new NotFoundException(`Can't find Board with id ${id}`);
  //   }
  //
  //   return found;
  // }
  //
  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //
  //   const board: Board = {
  //     id: uuid(),
  //     title, //title: title
  //     description, //description: description
  //     status: BoardStatus.PUBLIC,
  //   };
  //
  //   this.boards.push(board);
  //   return board;
  // }
  //
  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //
  //   /**
  //    * found를 getBoardByID()로 가져왔으므로
  //    * 위에서 선언한 if (!found) {} 문이 여기서도 적용됨
  //    */
  //
  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  // }
  //
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
