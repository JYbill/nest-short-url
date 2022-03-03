import { HttpStatus } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { CustomException } from '../exception/instance/authorize.exception';

/**
 * 拒绝的一些请求策列略, 在app.module中配置
 * @param req 
 * @param res 
 * @param next 
 */
export function RefuseMiddleware(req: Request, res: Response, next: NextFunction) {
  throw new CustomException({
    statusCode: HttpStatus.BAD_REQUEST,
    message: '拒绝请求❌',
    error: CustomException.MSG_BAD
  }, HttpStatus.BAD_REQUEST);
}