import { UrlService } from './url.service';
import { PageDto } from '../../common/dto/page.doto';
import { UrlDto } from '../../common/dto/url.dto';
export declare class UrlController {
    private readonly urlService;
    constructor(urlService: UrlService);
    getAllUrls(page: PageDto): Promise<import("../../common/vo/result.vo").ResultVo>;
    getOneUrlBy(page: PageDto): Promise<import("../../common/vo/result.vo").ResultVo>;
    getCount(): Promise<import("../../common/vo/result.vo").ResultVo>;
    getTodayCount(): Promise<import("../../common/vo/result.vo").ResultVo>;
    getWeekCount(): Promise<import("../../common/vo/result.vo").ResultVo>;
    insertUrl(urlDto: UrlDto): Promise<import("../../common/vo/result.vo").ResultVo>;
    deleteUrl(id: string): Promise<import("../../common/vo/result.vo").ResultVo>;
}
