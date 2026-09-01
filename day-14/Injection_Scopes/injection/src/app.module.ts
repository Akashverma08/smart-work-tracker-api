import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ScopeService } from './scope/scope.service.js';
import { UserService } from './user/user.service.js';
import { OrderService } from './order/order.service.js';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ScopeService, UserService, OrderService],
})
export class AppModule {}
