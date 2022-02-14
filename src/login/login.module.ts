import {Module} from '@nestjs/common';
import {LoginController} from './login.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../users/user.model";
import {LoginService} from './login.service';
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {JwtStrategy} from "./jwt.strategy";

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
    }),],

  controllers: [LoginController],
  providers: [LoginService, LocalStrategy, JwtStrategy]
})
export class LoginModule {
}
