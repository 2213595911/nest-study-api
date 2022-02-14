import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as bcrypt from 'bcrypt'

export type UserDocument = User & Document

@Schema()
export class User {

  @Prop()
  username: string

  @Prop({
    set(value: string) {
      return bcrypt.hashSync(value, 10)
    }
  })
  password: string
}

export const UserSchema = SchemaFactory.createForClass(User)