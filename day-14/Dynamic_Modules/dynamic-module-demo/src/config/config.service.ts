import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {

  constructor(
    @Inject('CONFIG_OPTIONS')
    private options: any,
  ) {}

  getConfig() {
    return this.options;
  }
}