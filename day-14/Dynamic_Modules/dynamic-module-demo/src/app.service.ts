import { Injectable } from '@nestjs/common';

import { ConfigService } from './config/config.service.js';

@Injectable()
export class AppService {

  constructor(
    private configService: ConfigService,
  ) {}

  getHello() {
    return this.configService.getConfig();
  }
}