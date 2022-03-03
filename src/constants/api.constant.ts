/**
 * 返回值的key设置为静态常量意义在于后期维护 > 前期开发, 一旦有该接口key的需求, 有胜于无
 */
export class ApiKeyConstant {
  // 云数据库collection
  public static readonly url = "url";
  public static readonly user = "user";
  public static readonly ad = "ad";

  // url表返回主要数据
  // data数据
  public static readonly data = "data";
  // offset偏移量
  public static readonly offset = "offset";

}