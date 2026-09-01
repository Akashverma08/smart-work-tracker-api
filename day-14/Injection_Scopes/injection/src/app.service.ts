import { Injectable } from '@nestjs/common';

import { ScopeService } from './scope/scope.service.js';
import { UserService } from './user/user.service.js';
import { OrderService } from './order/order.service.js';

@Injectable()
export class AppService {
  constructor(
    private scopeService: ScopeService,
    private userService: UserService,
    private orderService: OrderService,
  ) { }
  getHello() {
    return {
      userScopeId: this.userService.getScopeId(),
      orderScopeId: this.orderService.getScopeId(),
    }
  }
}
