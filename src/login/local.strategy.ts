import {Strategy} from 'passport-local';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable} from '@nestjs/common';
import {LoginService} from "./login.service";
import {LoginDto} from "./dto/login.dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly LoginService: LoginService) {
    super();
  }

  async validate(username: string, password: string): Promise<{ message: string } | LoginDto> {
    return await this.LoginService.validateUser(username, password)
  }

}