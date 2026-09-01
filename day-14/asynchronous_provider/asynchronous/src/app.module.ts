import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

import {databaseProvider} from "./database.provider.js";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    databaseProvider,

  ],
})
export class AppModule {}
