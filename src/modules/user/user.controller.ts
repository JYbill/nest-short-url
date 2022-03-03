import { UserService } from '../user/user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from '../../common/dto/user.dto';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Post('/login')
  login(@Body() user: UserDto) {
    return this.userService.login(user);
  }
}
