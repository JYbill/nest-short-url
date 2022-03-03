import { UrlPo } from './../../common/pojo/url.pojo';
import { ResultVo } from './../../common/vo/result.vo';
import { DBProvider } from './../../common/db/db.provider';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConvertDto } from 'src/common/dto/convert.dto';
import { plainToClass } from 'class-transformer';
import { Request } from 'express';
import { CustomException } from '../../common/exception/instance/authorize.exception';

@Injectable()
export class ConvertService {

  private readonly msg_hashKey = '存在相同的key';

  constructor(private dbProvider: DBProvider) { }

  /**
   * 校验是否已存在key
   * @returns 
   */
  async checkHadKey(key: string): Promise<any[]> {
    const { data } = await this.dbProvider.getUrlByKey(key);
    return data;
  }

  /**
   * 存储到云函数
   * @param reqConvert 
   */
  async saveCloudSql(reqConvert: ConvertDto, host: string) {
    // 校验是否存在key
    const hasKey = await this.checkHadKey(reqConvert.key);
    if (hasKey.length) {
      throw new CustomException({
        statusCode: HttpStatus.BAD_REQUEST,
        error: CustomException.MSG_BAD,
        message: '已存在相同的key'
      }, 200)
    }

    // 不存在 -> 添加key
    const ret = await this.dbProvider.insertUrl(plainToClass(UrlPo, reqConvert, { groups: ['create'] }));
    const { id, requestId } = ret;
    console.log(ret);
    return id && requestId ?
      ResultVo.sendSuccess({ id, url: new URL('/url/' + reqConvert.key, host) })
      :
      ResultVo.sendSuccess(ret)
  }
}
