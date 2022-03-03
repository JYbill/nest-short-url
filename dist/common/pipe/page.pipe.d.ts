import { PageDto } from './../dto/page.doto';
import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class PagePipe implements PipeTransform<any> {
    transform(value: PageDto, metadata: ArgumentMetadata): Promise<PageDto>;
}
