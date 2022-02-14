import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {ExceptionDto} from "./exception.controller";

@Injectable()
export class ExceptionService {

  findOne(id: string, body: ExceptionDto) {
    if (!body.username) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        message: '请传递必要值用户名',
      }, HttpStatus.FORBIDDEN)
    }
    return {
      message: "请求成功",
      params: {id},
      body: {username: body.username}
    }
  }

  find(id: number) {
    return {
      mesage: "请求成功",
      id
    }
  }
}
