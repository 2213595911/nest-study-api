import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { PostDto } from './dto/editPostDto';

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('/')
  @ApiOperation({ summary: '帖子列表' })
  async index() {
    return this.postsService.findAll();
  }

  @Post('/')
  @ApiOperation({ summary: '创建帖子' })
  async create(@Body() Post: PostDto) {
    const result = await this.postsService.create(Post);
    return { success: true, result };
  }

  @Get(':id')
  @ApiOperation({ summary: '单个帖子' })
  find(@Param('id') id: string) {
    return this.postsService.find(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '更新帖子' })
  update(@Param('id') id: string, @Body() Post: PostDto) {
    this.postsService.update(id, Post).then((r) => r);
    return {
      success: true,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  remove(@Param('id') id: string) {
    this.postsService.remove(id).then((r) => r);
    return {
      success: true,
    };
  }
}
