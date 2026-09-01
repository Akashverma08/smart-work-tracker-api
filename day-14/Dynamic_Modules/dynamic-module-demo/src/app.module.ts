import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from './config/config.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      appName:"Students",
      version:"6",
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
