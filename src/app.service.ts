import {Injectable} from '@nestjs/common';
import {Express} from 'express'

@Injectable()
export class AppService {
  upload(file: Express.Multer.File) {
    if (!file?.filename) {
      return {message: '请上传文件'}
    }
    const url = `http://localhost:3007/uploads/${file?.filename}`
    return {
      ...file,
      url
    }
  }
}
