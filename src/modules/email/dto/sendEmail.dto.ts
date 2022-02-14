import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class sendEmailDto {

  @ApiProperty({name: 'email', description: '发送的邮箱地址', default: "2213595911@qq.com"})
  @IsNotEmpty()
  email: string;

  @ApiProperty({name: "subject", description: '邮箱标题', required: false, default: '邮箱验证码'})
  subject?: string

  @ApiProperty({name: "sign", description: '签名', required: false, default: "回复无效"})
  sign?: string
}