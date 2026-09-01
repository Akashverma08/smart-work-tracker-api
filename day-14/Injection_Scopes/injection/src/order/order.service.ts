import { Injectable } from '@nestjs/common';
import { ScopeService } from '../scope/scope.service.js';

@Injectable()
export class OrderService {

  constructor(
    private scopeService: ScopeService,
  ) {}

  getScopeId() {
    return this.scopeService.getId();
  }
}