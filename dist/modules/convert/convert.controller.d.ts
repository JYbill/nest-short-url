import { ResultVo } from './../../common/vo/result.vo';
import { ConvertService } from './convert.service';
import { ConvertDto } from '../../common/dto/convert.dto';
import { Request, Response } from 'express';
export declare class ConvertController {
    private convertService;
    constructor(convertService: ConvertService);
    convert(reqConvert: ConvertDto, req: Request): Promise<ResultVo>;
    redirect(key: string, res: Response): Promise<void>;
}
