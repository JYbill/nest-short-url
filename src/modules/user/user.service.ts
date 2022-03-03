import { ResultVo } from './../../common/vo/result.vo';
import { DBProvider } from './../../common/db/db.provider';
import { Injectable } from '@nestjs/common';
import { UserDto } from '../../common/dto/user.dto';

@Injectable()
export class UserService {

  constructor(private readonly dbProvider: DBProvider) { }

  async login(user: UserDto) {
    const realUser = await this.dbProvider.getUser(user.username, user.password);
    return realUser.data.length ? ResultVo.sendSuccess('登录成功') : ResultVo.sendError(400, '登录失败');
  }
}
