import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

import {LOGGER_TOKEN} from "./constants.js";
import {ConsoleLogger} from "./console-logger.js";
import {FileLogger} from "./file-logger.js";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,

    /*{
      provide: 'My_App',
      useValue: "My Nest App"
    }*/

    {
      provide:LOGGER_TOKEN,
      useClass: FileLogger

    },


  ],
})
export class AppModule {}
