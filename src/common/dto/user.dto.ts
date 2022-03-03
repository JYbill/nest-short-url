import { IsString } from "class-validator";

/**
 * 用户传过来的User对象
 */
export class UserDto {

  @IsString()
  username: string;

  @IsString()
  password: string;

}