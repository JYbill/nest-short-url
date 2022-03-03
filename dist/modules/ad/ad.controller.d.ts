import { ResultVo } from './../../common/vo/result.vo';
import { PageDto } from './../../common/dto/page.doto';
import { AdService } from './ad.service';
import { AdPo } from '../../common/pojo/ad.pojo';
export declare class AdController {
    private readonly adService;
    constructor(adService: AdService);
    insertAd(adPo: AdPo): Promise<ResultVo>;
    getAllAds(page: PageDto): any;
    updateAd(adPo: AdPo): ResultVo | Promise<ResultVo>;
    deleteAd(id: number): Promise<ResultVo>;
}
