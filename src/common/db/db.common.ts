import { ConfigKeyConstant } from '../../constants/config.constant';
import cloudbase from '@cloudbase/node-sdk';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DBCommonProvider {

  readonly db;
  readonly db_cmd;

  constructor(private config: ConfigService) {
    const cloudBaseConfig = this.config.get(ConfigKeyConstant.cloudBase);
    this.db = cloudbase.init(cloudBaseConfig).database();
    this.db_cmd = this.db.command;
  }
}