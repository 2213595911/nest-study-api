import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class PostDto {
  @ApiProperty({title: '文章标题', example: '帖子标题1'})
  @IsNotEmpty({message: "文章标题是必须的"})
  public title: string;

  @ApiProperty({title: '文章内容', example: '帖子内容1'})
  public content: string;
}