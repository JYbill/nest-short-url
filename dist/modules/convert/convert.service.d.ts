import { ResultVo } from './../../common/vo/result.vo';
import { DBProvider } from './../../common/db/db.provider';
import { ConvertDto } from 'src/common/dto/convert.dto';
export declare class ConvertService {
    private dbProvider;
    private readonly msg_hashKey;
    constructor(dbProvider: DBProvider);
    checkHadKey(key: string): Promise<any[]>;
    saveCloudSql(reqConvert: ConvertDto, host: string): Promise<ResultVo>;
}
