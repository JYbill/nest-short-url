import { DBModule } from './../../common/db/db.module';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [DBModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
