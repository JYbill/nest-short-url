import { ResultVo } from './../../common/vo/result.vo';
import { CustomException } from '../../common/exception/instance/authorize.exception';
import { xiaoQinVarUtils } from './../../common/utils/encapsulation.util';
import { ConvertService } from './convert.service';
import { Body, Controller, Get, Header, Headers, HostParam, Ip, Param, ParseIntPipe, Post, Req, Res, ValidationPipe, HttpStatus, Redirect } from '@nestjs/common';
import { ConvertDto } from '../../common/dto/convert.dto';
import { Request, Response } from 'express';

@Controller()
export class ConvertController {

  constructor(private convertService: ConvertService) { }

  @Post()
  convert(@Body() reqConvert: ConvertDto, @Req() req: Request) {
    // console.log(reqConvert.key && reqConvert.key.length >= 1);
    (reqConvert.key && reqConvert.key.length >= 1) ?
      ''
      :
      reqConvert.key = xiaoQinVarUtils.randomString(8);
    return this.convertService.saveCloudSql(reqConvert, `${req.protocol}://${req.headers.host}${req.path}`);
  }

  @Get('/:key')
  async redirect(@Param('key') key: string, @Res() res: Response) {
    // 不存在key
    const data = await this.convertService.checkHadKey(key);
    if (!data.length) {
      throw new CustomException({
        error: CustomException.MSG_BAD,
        message: `不存在key: ${key}`,
        statusCode: HttpStatus.BAD_REQUEST
      }, HttpStatus.BAD_REQUEST)
    }

    // 存在 -> 重定向
    res.redirect(data[0].url);
  }

}
