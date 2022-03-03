import { UrlDto } from 'src/common/dto/url.dto';
import { UrlPo } from './../../common/pojo/url.pojo';
import { UserDto } from './../../common/dto/user.dto';
import { xiaoQinVarUtils } from './../../common/utils/encapsulation.util';
import { DBProvider } from './../../common/db/db.provider';
import { Injectable, Res } from '@nestjs/common';
import { ResultVo } from '../../common/vo/result.vo';
import { plainToClass, plainToClassFromExist } from 'class-transformer';
import { ConvertService } from '../convert/convert.service';

@Injectable()
export class UrlService {

  constructor(private readonly dbProvider: DBProvider, private readonly convertService: ConvertService) { }

  // 总条数
  async findAllCount() {
    const { total } = await this.dbProvider.getUrlsCount();
    return ResultVo.sendSuccess(total);
  }

  // 分页查询所有
  async findAll(skipNumber: number, pageNumber: number) {
    const { total } = await this.dbProvider.getUrlsCount();
    const { data: urls } = await this.dbProvider.getAllUrls(skipNumber, pageNumber);
    return ResultVo.sendSuccess({
      urls,
      total
    });
  }

  // 根据关键字分页查询
  async findByKeyWorld(keyWord: string, skipNumber: number, pageNumber: number) {
    const data = await this.dbProvider.getUrlByKeyWorld(keyWord, skipNumber, pageNumber);
    return ResultVo.sendSuccess(data);
  }

  // 查询当天条数
  async findTodayCount() {
    const { total } = await this.dbProvider.findTodayCount();
    return ResultVo.sendSuccess(total);
  }

  // 今天到前七天的条数
  async findWeekCount() {
    const task = [];

    // 获取近七天的时间, 二维数组
    for (let index = 0; index < 7; index++) {
      const nowDate = new Date();
      nowDate.setUTCDate(nowDate.getUTCDate() - index);
      task.push(this.dbProvider.findTodayCount(nowDate));
    }
    const ret = await Promise.all(task);
    return ResultVo.sendSuccess(ret);
  }

  // 新增url
  async insertUrl(urlDto: UrlDto) {
    console.log(urlDto);

    // 校验是否存在相同key
    const hasKey = await this.convertService.checkHadKey(urlDto.custom_key);
    if (hasKey.length) {
      return ResultVo.sendError(400, '存在相同key');
    }

    // 新增操作
    const pojo = plainToClass(UrlPo, urlDto, { groups: ['create'] });
    const { id, requestId } = await this.dbProvider.insertUrl(pojo);
    return id && requestId ? ResultVo.sendSuccess('新增成功🚀') : ResultVo.sendError(400, '新增失败, 联系管理员');
  }

  // 根据id删除
  async deleteUrl(id: string) {
    const { deleted } = await this.dbProvider.deleteById(id);
    return deleted == 0 ? ResultVo.sendError(400, 'id不存在') : ResultVo.sendSuccess('删除成功');
  }
}
