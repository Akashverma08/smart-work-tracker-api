import { Module } from '@nestjs/common';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './products/products.module.js';
import { TasksModule } from './tasks/tasks.module.js';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from './users/users.module.js';
import { AuthModule } from './auth/auth.module.js';




@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), 
  
  MongooseModule.forRoot(
    process.env.MONGODB_URI!
  ), 
  ProductsModule, TasksModule, UsersModule, AuthModule,],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
