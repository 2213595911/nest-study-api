import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  Request,
  Get,
  Param,
} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiTags} from '@nestjs/swagger';
import {LoginDto} from './dto/login.dto';
import {JwtAuthGuard, LocalAuthGuard} from './login.guard';
import {LoginService} from './login.service';

interface Request {
  user: LoginDto;
}

@Controller('auth')
@ApiTags('登录')
export class LoginController {
  constructor(private readonly LoginService: LoginService) {
  }

  @Post('login')
  @ApiOperation({summary: '登录'})
  @UseGuards(LocalAuthGuard)
  login(@Body() LoginDto: LoginDto, @Req() req: Request) {
    return this.LoginService.Login(req.user);
  }

  @Get('profile/:id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({summary: '用户个人信息'})
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getProfile(@Param('id') id: string) {
    return await this.LoginService.getProfile(id);
  }
}
