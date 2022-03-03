import { PageDto } from './../dto/page.doto';
// 将string转number
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

/**
 * PageDTO 设置跳过条数
 */
@Injectable()
export class PagePipe implements PipeTransform<any> {
  async transform(value: PageDto, metadata: ArgumentMetadata) {
    value.skipNumber = (value.currentNumber - 1) * value.pageNumber;
    return value;
  }
}