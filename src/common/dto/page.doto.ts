import { Transform } from "class-transformer";
import { IsInt, IsNumber, IsNumberString, IsString } from "class-validator";

/**
 * 用户传过来的Page对象
 */
export class PageDto {

  // 关键字
  @IsString()
  keyWorld?: string;

  // 每页多少条
  @IsInt()
  pageNumber: number;

  // 当前第几页
  @IsInt()
  currentNumber: number;

  // 总数
  total?: number;

  // skip总数
  @Transform(item => {
    console.log(item);
  })
  skipNumber?: number
}