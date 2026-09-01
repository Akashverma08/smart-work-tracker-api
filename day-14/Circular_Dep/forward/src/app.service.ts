import { Injectable } from '@nestjs/common';
import { CatsService } from './cats/cats.service.js';

@Injectable()
export class AppService {

  constructor(
    private catsService: CatsService,
  ) {}

  getHello() {
    return this.catsService.getCats();
  }
}