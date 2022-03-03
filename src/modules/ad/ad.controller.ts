import { ResultVo } from './../../common/vo/result.vo';
import { PagePipe } from './../../common/pipe/page.pipe';
import { PageDto } from './../../common/dto/page.doto';
import { AdService } from './ad.service';
import { Body, Controller, Get, Put, Query, Post, Delete, Param } from '@nestjs/common';
import { AdPo } from '../../common/pojo/ad.pojo';
import { classToClassFromExist } from 'class-transformer';

@Controller('ad')
export class AdController {

  constructor(private readonly adService: AdService) { }


  @Post('/add')
  insertAd(@Body() adPo: AdPo) {
    return this.adService.insertAd(adPo);
  }

  @Post('/all')
  getAllAds(@Body(PagePipe) page: PageDto) {
    return this.adService.getAllAds(page);
  }

  @Put()
  updateAd(@Body() adPo: AdPo) {
    if (!adPo._id) {
      return ResultVo.sendError(400, "id不能为空");
    }
    return this.adService.updateAd(adPo);
  }

  @Delete(':id')
  deleteAd(@Param('id') id: number) {
    return this.adService.deleteAd(id);
  }
}
