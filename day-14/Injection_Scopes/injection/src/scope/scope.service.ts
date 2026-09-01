import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.TRANSIENT,
})
export class ScopeService {

  private id = Math.random();

  constructor() {
    console.log('ScopeService created:', this.id);
  }

  getId() {
    return this.id;
  }

  getMessage() {
    return 'Hello from Transient Service';
  }
}

/*import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.REQUEST,
})
export class ScopeService {

  constructor() {
    console.log('ScopeService created');
  }

  getMessage() {
    return 'Hello from Request Scoped Service';
  }
} */

/* import { Injectable } from '@nestjs/common';

@Injectable()
export class ScopeService {

  constructor() {
    console.log('ScopeService created');
  }

  getMessage() {
    return 'Hello from ScopeService';
  }
} */