import {Controller, Get, Query, UseGuards,} from '@nestjs/common';
import {ApiQuery, ApiTags} from "@nestjs/swagger";
import {RolesGuard} from '../../common/guard/roles.guard'
import {Roles} from '../../common/decorator/roles.decorator'

@Controller('guard')
@ApiTags('守卫')
export class GuardController {

  @Get('/')
  @ApiQuery({name: "role", description: "传递角色"})
  @Roles('admin')
  @UseGuards(RolesGuard)
  find(@Query('role') role: string) {
    return {
      message: "请求成功",
      role
    }
  }

}
