import { ConfigModule } from '@nestjs/config';
import { DBProvider } from '../../common/db/db.provider';
import { Module } from '@nestjs/common';
import { ConvertController } from './convert.controller';
import { ConvertService } from './convert.service';
import { DBModule } from '../../common/db/db.module';

@Module({
  imports: [DBModule],
  controllers: [ConvertController],
  providers: [ConvertService]
})
export class ConvertModule { }
