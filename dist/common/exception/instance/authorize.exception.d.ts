import { HttpException, HttpStatus } from "@nestjs/common";
export declare class CustomException extends HttpException {
    static readonly MSG_BAD = "Bad request.";
    constructor(exceptionMsg: ThrowException, statusCode?: HttpStatus);
}
