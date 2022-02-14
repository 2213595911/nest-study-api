import {Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {ApiBearerAuth,  ApiOperation, ApiParam, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../login/login.guard";

@ApiBearerAuth()
@Controller('users')
@ApiTags('用户')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @ApiOperation({summary: '创建用户'})
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({summary: '用户列表'})
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({summary: '单个用户'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @ApiOperation({summary: '更新用户'})
  @ApiParam({name: "id", description: "用户id"})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    this.usersService.update(id, updateUserDto);
    return {success: true}
  }

  @ApiOperation({summary: '删除用户'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    this.usersService.remove(id);
    return {success: true}
  }
}
