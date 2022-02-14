import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import * as mongoose from 'mongoose';

export class LoginDto extends PartialType(CreateUserDto) {
  _id?: string | mongoose.Types.ObjectId;
}
