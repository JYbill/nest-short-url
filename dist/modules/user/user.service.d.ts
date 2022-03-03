import { ResultVo } from './../../common/vo/result.vo';
import { DBProvider } from './../../common/db/db.provider';
import { UserDto } from '../../common/dto/user.dto';
export declare class UserService {
    private readonly dbProvider;
    constructor(dbProvider: DBProvider);
    login(user: UserDto): Promise<ResultVo>;
}
