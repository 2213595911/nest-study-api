import {ApiProperty} from "@nestjs/swagger";

export class Profile {
  @ApiProperty({name: "avatar", description: '用户头像'})
  public avatar: string
}