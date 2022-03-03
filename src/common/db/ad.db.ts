import { plainToClass } from 'class-transformer';
import { PageDto } from './../dto/page.doto';
import { ApiKeyConstant } from './../../constants/api.constant';
import { Injectable } from "@nestjs/common";
import { DBCommonProvider } from "./db.common";
import { AdPo } from '../pojo/ad.pojo';

@Injectable()
export class AdProvider {

  constructor(private readonly dbProvider: DBCommonProvider) { }

  // 获取所有广告
  getAllAds(pageDto: PageDto) {
    let { skipNumber, pageNumber, keyWorld: key } = pageDto;
    key = key ? key : '';
    return this.dbProvider.db.collection(ApiKeyConstant.ad)
      .where({
        name: new this.dbProvider.db.RegExp({
          regexp: `.*${key}.*`,
          options: 'ig'
        })
      })
      .skip(skipNumber).limit(pageNumber).get();
  }

  // 添加广告
  insertAd(adPo: AdPo) {
    return this.dbProvider.db.collection(ApiKeyConstant.ad).add(adPo);
  }

  // 更新广告
  updateAd(adPo: AdPo) {
    return this.dbProvider.db.collection(ApiKeyConstant.ad).doc(adPo._id)
      .update(plainToClass(AdPo, adPo, { excludePrefixes: ['_'] }));
  }

  // 删除广告
  deleteAd(id: number) {
    return this.dbProvider.db.collection(ApiKeyConstant.ad).doc(id).remove();
  }
}