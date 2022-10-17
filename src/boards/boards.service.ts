import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
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
     * @InjectRepository를 이용해 종속성 주입
     * 서비스에서 Repository를 이용한다고 알림
     */
    @InjectRepository(Board)
    private boardRepository: BoardRepository,
  ) {}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({ where: { id: id } });

    if (!found) {
      throw new NotFoundException(`Can't find board with id ${id}`);
    }

    return found;
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.boardRepository.save(createBoardDto);
    return board;
  }
}
