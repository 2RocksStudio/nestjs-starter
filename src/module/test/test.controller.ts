import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponseSchema } from '../../common/decorator/swagger.decorator';
import { AppResponse } from '../../common/response/app.response';
import { TestManager } from './test.manager';

@ApiTags('test')
@Controller({ path: '/test', version: ['1'] })
export class TestController {
  constructor(private readonly testManager: TestManager) {}
  @Get()
  @ApiResponseSchema(HttpStatus.OK, 'OK')
  async findAll(@Query('id') id: string): Promise<AppResponse> {
    return new AppResponse(await this.testManager.testGet(id));
  }
}
