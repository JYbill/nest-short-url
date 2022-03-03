import { AdProvider } from './../../common/db/ad.db';
import { DBModule } from './../../common/db/db.module';
import { Module } from '@nestjs/common';
import { AdController } from './ad.controller';
import { AdService } from './ad.service';

@Module({
  imports: [DBModule],
  controllers: [AdController],
  providers: [AdService]
})
export class AdModule { }
