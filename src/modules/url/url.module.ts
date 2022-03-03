import { DBProvider } from './../../common/db/db.provider';
import { ConvertModule } from './../convert/convert.module';
import { ConvertService } from './../convert/convert.service';
import { DBModule } from './../../common/db/db.module';
import { Module } from '@nestjs/common';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';

@Module({
  imports: [DBModule],
  controllers: [UrlController],
  providers: [UrlService, ConvertService]
})
export class UrlModule { }
