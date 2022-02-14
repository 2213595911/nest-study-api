import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../users/user.model';
import { Model } from 'mongoose';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<{ message: string } | LoginDto> {
    const user = await this.UserModel.findOne({ username: username });
    if (!user)
      return {
        message: '用户不存在',
      };
    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) {
      return {
        message: '密码错误',
      };
    }
    return user;
  }

  async Login(LoginDto: LoginDto) {
    const payload = { username: LoginDto.username, id: LoginDto._id };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }

  async getProfile(id: string) {
    const user = await this.UserModel.findById(id);
    return {
      username: user.username,
    };
  }
}
