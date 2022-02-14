import {Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {Express} from 'express'
import {AppService} from './app.service';
import {ApiOperation,  ApiTags} from '@nestjs/swagger';
import {FileInterceptor} from "@nestjs/platform-express";
import {ApiImplicitFile} from "@nestjs/swagger/dist/decorators/api-implicit-file.decorator";

@Controller('/')
@ApiTags('默认')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('/')
  @ApiOperation({summary: '默认接口'})
  index() {
    return 'hellow world'
  }

  @Post('upload')
  @ApiImplicitFile({
    name: '头像',
    description: '上传头像',
    required: true,
  })
  @ApiOperation({summary: "上传文件"})
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.appService.upload(file)
  }
}
