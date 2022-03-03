import { UserService } from '../user/user.service';
import { UserDto } from '../../common/dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    login(user: UserDto): Promise<import("../../common/vo/result.vo").ResultVo>;
}
