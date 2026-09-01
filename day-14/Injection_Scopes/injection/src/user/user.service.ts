import { Injectable } from '@nestjs/common';
import { ScopeService } from '../scope/scope.service.js';

@Injectable()
export class UserService {

  constructor(
    private scopeService: ScopeService,
  ) {}

  getScopeId() {
    return this.scopeService.getId();
  }
}