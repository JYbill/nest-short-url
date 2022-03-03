import { HttpCode, HttpException, HttpStatus } from "@nestjs/common";
import { ResultVo } from "../../vo/result.vo";

export class CustomException extends HttpException {

  static readonly MSG_BAD = 'Bad request.';

  constructor(exceptionMsg: ThrowException, statusCode = HttpStatus.FORBIDDEN) {
    super(exceptionMsg, statusCode);
  }
}