import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';

/**
 * @EntityRepository(): 클래스를 사용자 정의(CUSTOM) 저장소로 선언
 * 현재는 deprecated 됨
 */
// @EntityRepository(Board)
export class BoardRepository extends Repository<Board> {}
