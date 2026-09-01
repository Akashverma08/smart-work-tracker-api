import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service.js';
import type {Logger} from "./logger.interface.js";
import {LOGGER_TOKEN}  from "./constants.js";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,

    @Inject(LOGGER_TOKEN)
    private readonly logger :Logger,
  ) {}

  @Get()
  getHello(): string {
    this.logger.log("Hii it get called");
    return  this.appService.getHello();
  }
}
