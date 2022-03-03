import { PageDto } from './../dto/page.doto';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException
} from '@nestjs/common';
import { validate } from 'class-validator';
import { xiaoQinVarUtils } from '../utils/encapsulation.util';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const exceptionRes: any = exception.getResponse();
    const { method, originalUrl } = request;
    const {
      error,
      message,
      statusCode
    } = exceptionRes;
    console.log('❗❗❗', exceptionRes);
    console.log(`===============❗❗❗  ${method} ${originalUrl} 异常请求  ==================\n`);
    // console.log('url', request.url, request.baseUrl, request.path, request.originalUrl); // 测试
    response.status(statusCode).json({
      code: statusCode,
      timestamp: xiaoQinVarUtils.dateFormatByEcma(+new Date()),
      path: request.originalUrl,
      error,
      message: message instanceof Array ? message[0] : message,
      checked: '校验, 这是自定义全局捕获过滤器, 看到此消息证明为可控异常内🎁'
    });
  }
}