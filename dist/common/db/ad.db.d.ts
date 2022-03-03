import { PageDto } from './../dto/page.doto';
import { DBCommonProvider } from "./db.common";
import { AdPo } from '../pojo/ad.pojo';
export declare class AdProvider {
    private readonly dbProvider;
    constructor(dbProvider: DBCommonProvider);
    getAllAds(pageDto: PageDto): any;
    insertAd(adPo: AdPo): any;
    updateAd(adPo: AdPo): any;
    deleteAd(id: number): any;
}
