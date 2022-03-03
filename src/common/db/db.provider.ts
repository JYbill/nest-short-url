import { xiaoQinVarUtils } from './../utils/encapsulation.util';
import { UrlPo } from './../pojo/url.pojo';
import { ApiKeyConstant } from './../../constants/api.constant';
import { ConfigKeyConstant } from '../../constants/config.constant';
import cloudbase from '@cloudbase/node-sdk';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConvertDto } from '../dto/convert.dto';
import { DBCommonProvider } from './db.common';

@Injectable()
export class DBProvider {

  constructor(private readonly dBCommonProvider: DBCommonProvider) { }

  /**
   * GET 获取指定Url操作
   * @param doc 
   * @returns 
   */
  getUrlById(doc): Promise<UrlPo> {
    return this.dBCommonProvider.db.collection(ApiKeyConstant.url).doc(doc).get();
  }



  /**
   * POST 存储云函数操作
   * @param data 
   * @returns 
   */
  insertUrl(data: ConvertDto | UrlPo): Promise<any> {
    console.log(data);
    return this.dBCommonProvider.db.collection(ApiKeyConstant.url).add(data);
  }



  /**
   * 根据key获取url[] - 逻辑上只存在一个
   * @param key 
   * @returns 
   */
  getUrlByKey(key: string): Promise<any> {
    return this.dBCommonProvider.db.collection(ApiKeyConstant.url).where({ custom_key: this.dBCommonProvider.db_cmd.eq(key) }).get();
  }


  /**
   * 查询所有
   * @returns 
   */
  getAllUrls(skipNumber: number, pageNumber: number): Promise<any> {
    return this.dBCommonProvider.db.collection(ApiKeyConstant.url).where({ delete: this.dBCommonProvider.db_cmd.eq(false) }).skip(skipNumber).limit(pageNumber).get();
  }


  /**
   * 模糊查询url
   * @param key 
   * @param skipNumber 
   * @param pageNumber 
   * @returns 
   */
  getUrlByKeyWorld(key: string, skipNumber: number, pageNumber: number): Promise<any> {
    const regExp = new this.dBCommonProvider.db.RegExp({
      regexp: `([\\D|\\w]+${key}[\\D|\\w]+|^${key}[\\D|\\w]+|[\\D|\\w]+${key}$)`,
      options: 'g'
    });
    return this.dBCommonProvider.db.collection(ApiKeyConstant.url).where(this.dBCommonProvider.db_cmd.or(
      {
        url: regExp
      },
      {
        custom_key: regExp
      }
    ))
      .skip(skipNumber).limit(pageNumber).get();
  }

  /**
   * 根据关键字查询 urls
   * @returns 
   */
  getUrlsCount(): Promise<any> {
    return this.dBCommonProvider.db.collection(ApiKeyConstant.url).count();
  }


  /**
   * 管理员登录
   * @param username 
   * @param password 
   * @returns 
   */
  getUser(username: string, password: string): Promise<any> {
    return this.dBCommonProvider.db.collection(ApiKeyConstant.user).where({
      username, password
    }).get();
  }

  /**
   * 获取当天总条数
   * @param date 
   * @returns 
   */
  findTodayCount(date: Date = new Date()): Promise<any> {
    const timeArr = xiaoQinVarUtils.getBeforeAndAfterTime(date);
    return this.dBCommonProvider.db.collection(ApiKeyConstant.url).where({
      create_time: this.dBCommonProvider.db_cmd.and(this.dBCommonProvider.db_cmd.gte(timeArr[0]), this.dBCommonProvider.db_cmd.lte(timeArr[1]))
    }).count();
  }

  /**
   * 根据id删url
   * @param id 
   */
  deleteById(id: string) {
    return this.dBCommonProvider.db.collection(ApiKeyConstant.url).doc(id).remove();
  }
}