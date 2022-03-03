import { ConfigService } from '@nestjs/config';
export declare class DBCommonProvider {
    private config;
    readonly db: any;
    readonly db_cmd: any;
    constructor(config: ConfigService);
}
