import { IsString } from "class-validator";

/**
 * 前端传过来的url dto
 */
export class UrlDto {

  @IsString()
  url: string;

  @IsString()
  custom_key?: string;
}