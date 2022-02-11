import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PostsModule} from './posts/posts.module';
import {MongooseModule} from '@nestjs/mongoose';
import {UsersModule} from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    PostsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-blog-api'),
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    LoginModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
