import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TestDto, TestPostDto } from './types';

@Controller({ path: '/test', version: ['v1', VERSION_NEUTRAL] })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  get(@Query() query: TestDto): string {
    console.log({ query });
    return this.appService.getHello();
  }

  @Post('')
  post(@Body() body: TestPostDto): string {
    console.log({ body });
    return this.appService.getHello();
  }
}
