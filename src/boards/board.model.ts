/*
모델은 class나 interface로 만들 수 있음
- interface : 변수의 타입만을 체크
- class : 변수의 타입을 체크하고 인스턴스를 생성
 */
export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
