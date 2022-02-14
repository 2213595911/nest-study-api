import {ApiProperty, PartialType} from '@nestjs/swagger';
import {CreateUserDto} from './create-user.dto';
import {Profile} from "../interface/user.interface";

export class UpdateUserDto extends PartialType(CreateUserDto) {

  @ApiProperty({name: "profile", description: '用户信息'})
  profile: Profile
}