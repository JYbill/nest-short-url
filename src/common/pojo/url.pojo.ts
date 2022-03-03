import { xiaoQinVarUtils } from './../utils/encapsulation.util';
import { Expose, Transform } from "class-transformer";

/**
 * url pojo 实体类
 */
export class UrlPo {
  @Expose({ groups: ['create'] })
  @Transform(() => +new Date())
  create_time: number;

  @Expose()
  @Transform(() => +new Date())
  update_time: number;

  @Expose({ groups: ['create'] })
  @Transform(() => false)
  delete: boolean;

  @Expose()
  url: string;

  @Expose({ name: 'key' })
  @Transform((data) => {
    const key = data.obj.key;
    return key == undefined ? xiaoQinVarUtils.randomString(7) : key;
  })
  custom_key: string;
}