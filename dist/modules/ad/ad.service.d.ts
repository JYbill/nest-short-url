import { ResultVo } from './../../common/vo/result.vo';
import { PageDto } from './../../common/dto/page.doto';
import { AdProvider } from '../../common/db/ad.db';
import { AdPo } from '../../common/pojo/ad.pojo';
export declare class AdService {
    private readonly adProvider;
    constructor(adProvider: AdProvider);
    insertAd(adPo: AdPo): Promise<ResultVo>;
    getAllAds(page: PageDto): any;
    updateAd(adPo: AdPo): Promise<ResultVo>;
    deleteAd(id: number): Promise<ResultVo>;
}
