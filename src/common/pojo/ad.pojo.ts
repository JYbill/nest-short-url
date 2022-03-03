import { Exclude, Expose, Transform } from "class-transformer";
import { IsString } from "class-validator";

/**
 * 广告 AdPo
 */
export class AdPo {

  _id: string;

  image_url: string;

  name: string;

  @Expose()
  @Transform(() => +new Date())
  create_time: number;

  @Expose()
  @Transform(() => +new Date())
  update_time: number;
}