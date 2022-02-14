import {Prop, raw, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as bcrypt from 'bcrypt'
import {envEnum} from "../../enum/env.enum";

export type UserDocument = User & Document

@Schema()
export class User {

  @Prop()
  username: string

  @Prop({
    set: (value: string) => {
      return bcrypt.hashSync(value, Number(process.env[envEnum.bcrypt_key]))
    }
  })
  password: string

  @Prop(raw({avatar: String}))
  profile: Record<string, any>
}

export const UserSchema = SchemaFactory.createForClass(User)