/*
DTO : Data Transfer Object
계층간 데이터 교환을 위한 객체로,
DB에서 data를 얻어 Service나 Controller 등으로 보낼 떄 사용한다.
 */
export class CreateBoardDto {
  title: string;
  description: string;
}
