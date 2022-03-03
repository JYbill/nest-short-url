import { DBCommonProvider } from './db.common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DBProvider } from './db.provider';
import { AdProvider } from './ad.db';

@Module({
  imports: [ConfigModule],
  providers: [DBProvider, DBCommonProvider, AdProvider],
  exports: [DBProvider, AdProvider]
})
export class DBModule { }
