import { UrlDto } from 'src/common/dto/url.dto';
import { DBProvider } from './../../common/db/db.provider';
import { ResultVo } from '../../common/vo/result.vo';
import { ConvertService } from '../convert/convert.service';
export declare class UrlService {
    private readonly dbProvider;
    private readonly convertService;
    constructor(dbProvider: DBProvider, convertService: ConvertService);
    findAllCount(): Promise<ResultVo>;
    findAll(skipNumber: number, pageNumber: number): Promise<ResultVo>;
    findByKeyWorld(keyWord: string, skipNumber: number, pageNumber: number): Promise<ResultVo>;
    findTodayCount(): Promise<ResultVo>;
    findWeekCount(): Promise<ResultVo>;
    insertUrl(urlDto: UrlDto): Promise<ResultVo>;
    deleteUrl(id: string): Promise<ResultVo>;
}
