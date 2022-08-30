import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';

/**
 * 유효성 검사 파이프 만들기
 */

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  transform(value: string, metadata: ArgumentMetadata): any {
    /**
     * Data Transform : 입력 데이터를 원하는 형식으로변환
     */
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is not in the status options`);
    }
    return value;
  }

  private isStatusValid(status: any): boolean {
    const index = this.StatusOptions.indexOf(status);

    /**
     * Data validation : 입력 데이터의 유효성 체크
     *  status가 PUBLIC, PRIVATE가 아닌 값이 들어오면 에러 발생
     */

    return index !== -1;
  }
}
