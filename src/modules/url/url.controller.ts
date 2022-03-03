import { PagePipe } from './../../common/pipe/page.pipe';
import { UrlService } from './url.service';
import { Controller, Get, Param, Post, Body, ParseIntPipe, Delete, Query } from '@nestjs/common';
import { PageDto } from '../../common/dto/page.doto';
import { UrlDto } from '../../common/dto/url.dto';

@Controller('/info')
export class UrlController {

  constructor(private readonly urlService: UrlService) { }

  @Post('/all')
  getAllUrls(@Body(PagePipe) page: PageDto) {
    return this.urlService.findAll(page.skipNumber, page.pageNumber);
  }

  @Post('/key')
  getOneUrlBy(@Body(PagePipe) page: PageDto) {
    return this.urlService.findByKeyWorld(page.keyWorld, page.skipNumber, page.pageNumber);
  }

  @Get('/count')
  getCount() {
    return this.urlService.findAllCount();
  }

  @Get('/today')
  getTodayCount() {
    return this.urlService.findTodayCount();
  }

  @Get('/week')
  getWeekCount() {
    return this.urlService.findWeekCount();
  }

  @Post()
  insertUrl(@Body() urlDto: UrlDto) {
    return this.urlService.insertUrl(urlDto);
  }

  @Delete('/:id')
  deleteUrl(@Param('id') id: string) {
    return this.urlService.deleteUrl(id);
  }
}
