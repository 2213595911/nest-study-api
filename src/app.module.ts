import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PostsModule} from './modules/posts/posts.module';
import {MongooseModule} from '@nestjs/mongoose';
import {UsersModule} from './modules/users/users.module';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {LoginModule} from './modules/login/login.module';
import {MulterModule} from '@nestjs/platform-express';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';
import {ExceptionModule} from './modules/exception/exception.module';
import {GuardModule} from './modules/guard/guard.module';
import {EmailModule} from './modules/email/email.module';
import configModule from './config/index';
import {MailerModule} from '@nestjs-modules/mailer';
import {StatusMonitorModule} from 'nest-status-monitor';
import StatusMonitorConfig from './config/statusMonitor.config';
import {ScheduleModule} from '@nestjs/schedule';
import {TasksModule} from './schedule/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-blog-api'),
    // 定时任务
    ScheduleModule.forRoot(),
    // 服务监视
    StatusMonitorModule.setUp(StatusMonitorConfig),
    // 上传文件
    MulterModule.register({
      dest: 'uploads/',
    }),
    // 配置文件
    ConfigModule.forRoot({
      load: [configModule],
      isGlobal: true,
    }),
    // 邮件
    MailerModule.forRootAsync({
      useFactory: (configService: ConfigService) => configService.get('email'),
      inject: [ConfigService],
    }),
    // 静态资源
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../uploads'),
      serveRoot: '/uploads',
    }),
    PostsModule,
    UsersModule,
    LoginModule,
    ExceptionModule,
    GuardModule,
    EmailModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
// export class AppModule implements NestModule {
// 应用中间件
// configure(consumer: MiddlewareConsumer) {
//   consumer.apply(LoggerMiddleware).exclude({path: '/api/auth/profile/:id', method: RequestMethod.GET}).forRoutes(LoginController)
// }
// }
export class AppModule {
}
