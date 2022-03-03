import { ResultVo } from './../../common/vo/result.vo';
import { PageDto } from './../../common/dto/page.doto';
import { Injectable, Res } from '@nestjs/common';
import { AdProvider } from '../../common/db/ad.db';
import { AdPo } from '../../common/pojo/ad.pojo';
import { plainToClass } from 'class-transformer';

@Injectable()
export class AdService {

  constructor(private readonly adProvider: AdProvider) { }

  // 新增ad
  async insertAd(adPo: AdPo) {
    await this.adProvider.insertAd(plainToClass(AdPo, adPo));
    return ResultVo.sendSuccess('新增成功');
  }

  // 获取所有AD,可模糊查询，分页
  getAllAds(page: PageDto) {

    return this.adProvider.getAllAds(page);
  }

  async updateAd(adPo: AdPo) {
    const ret = await this.adProvider.updateAd(plainToClass(AdPo, adPo));
    return ResultVo.sendSuccess(ret);
  }

  async deleteAd(id: number) {
    const ret = await this.adProvider.deleteAd(id);
    return ResultVo.sendSuccess(ret);
  }
}
