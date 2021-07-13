import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { TestDto } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  get(@Query() query: TestDto): string {
    console.log({ query });
    return this.appService.getHello();
  }
}
