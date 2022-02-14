import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty,} from "class-validator";

export class CreateUserDto {

  @ApiProperty({title: '用户名', default: "admin"})
  @IsNotEmpty({message: "用户名是必须的"})
  public username: string


  @ApiProperty({title: '密码', default: "123"})
  @IsNotEmpty({message: "密码是必须的"})
  public password: string
}
