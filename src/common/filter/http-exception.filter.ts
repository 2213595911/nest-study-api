import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from '@nestjs/common';
import {Request, Response} from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    let message = exception.message
    if (message === 'Unauthorized') {
      message = 'token过期或无效'
    } else if (message === 'Forbidden resource') {
      message = '您无权访问'
    }
    response
        .status(status)
        .json({
          status: status,
          message,
          error: exception.name
        });
  }
}