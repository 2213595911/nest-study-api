import {Body, Controller, Get, Param, ParseIntPipe, Post,} from '@nestjs/common';
import {ApiOperation, ApiParam, ApiProperty, ApiTags} from "@nestjs/swagger";
import {ExceptionService} from "./exception.service";

export class ExceptionDto {
  @ApiProperty({description: '用户名若不传递将会抛出统一格式的错误', required: false})
  username: string
}

@Controller('exception')
@ApiTags('异常过滤器')
export class ExceptionController {
  constructor(private readonly exceptionService: ExceptionService) {
  }

  @Post(':id')
  @ApiOperation({summary: "异常错误统一处理"})
  findOne(@Param('id') id: string, @Body() body: ExceptionDto) {
    return this.exceptionService.findOne(id, body)
  }

  @Get("/test/:id")
  @ApiParam({name: "id", type: "Number", description: '测试id'})
  @ApiOperation({summary: '类型转换管道'})
  find(@Param('id', ParseIntPipe) id: number) {
    this.exceptionService.find(id)
  }
}
