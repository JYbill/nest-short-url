import { UrlPo } from './../pojo/url.pojo';
import { ConvertDto } from '../dto/convert.dto';
import { DBCommonProvider } from './db.common';
export declare class DBProvider {
    private readonly dBCommonProvider;
    constructor(dBCommonProvider: DBCommonProvider);
    getUrlById(doc: any): Promise<UrlPo>;
    insertUrl(data: ConvertDto | UrlPo): Promise<any>;
    getUrlByKey(key: string): Promise<any>;
    getAllUrls(skipNumber: number, pageNumber: number): Promise<any>;
    getUrlByKeyWorld(key: string, skipNumber: number, pageNumber: number): Promise<any>;
    getUrlsCount(): Promise<any>;
    getUser(username: string, password: string): Promise<any>;
    findTodayCount(date?: Date): Promise<any>;
    deleteById(id: string): any;
}
