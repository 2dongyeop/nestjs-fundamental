import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board.model';

/**
 * Entity를 생성해야 하는 이유
 * TypeORM을 사용하면 데이터베이스 테이블로 변환 되는 Class이기에
 * 간단하게 컬럼들만 정의하면 된다.
 */

@Entity()
export class Board extends BaseEntity {
  /**
   * @PrimaryGeneratedColumn()는 기본 키 열임을 나타냄
   * @Column()은 기본 키가 아닌 열
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
