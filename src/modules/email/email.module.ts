import {Module} from '@nestjs/common';
import {EmailController} from './email.controller';
import {EmailService} from './email.service';
import {join} from 'path'
import {MailerModule} from "@nestjs-modules/mailer";
import {EjsAdapter} from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";

@Module({
  imports: [MailerModule.forRoot({
    transport: {
      host: 'smtp.exmail.qq.com', //邮箱服务器地址
      port: 465, //服务器端口 默认 465
      auth: {
        user: 'wanghaonan@qdbk3.wecom.work',//你的邮箱地址
        pass: '4HUNmrpsNXrNVXci'
      }
    },
    preview: false,//是否开启预览，开启了这个属性，在调试模式下会自动打开一个网页，预览邮件
    defaults: {
      from: '<wanghaonan@qdbk3.wecom.work>' //发送人 你的邮箱地址
    },
    template: {
      dir: join(process.cwd(), '/src/modules/email/template'),//这里就是你的ejs模板文件夹路径
      adapter: new EjsAdapter(),
      options: {
        strict: true //严格模式
      }
    }
  })],
  controllers: [EmailController],
  providers: [EmailService]
})
export class EmailModule {
}
