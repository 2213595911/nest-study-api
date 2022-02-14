import {Body, Controller, Post} from '@nestjs/common';
import {ApiBody, ApiOperation, ApiTags} from "@nestjs/swagger";
import {EmailService} from "./email.service";
import {sendEmailDto} from "./dto/sendEmail.dto";

@Controller('email')
@ApiTags('邮箱验证码')
export class EmailController {
  constructor(private emailService: EmailService) {
  }

  @Post('sendCode')
  @ApiOperation({summary: "发送邮箱验证码"})
  @ApiBody({description: "收件人信息", required: true, type: sendEmailDto})
  sendEmailCode(@Body() data: sendEmailDto) {
    console.log(data)
    return this.emailService.sendEmailCode(data);
  }

}
