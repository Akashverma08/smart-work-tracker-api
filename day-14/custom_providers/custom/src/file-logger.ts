import { Injectable } from '@nestjs/common';
import { Logger } from './logger.interface.js';

@Injectable()
export class FileLogger implements Logger {
  log(message: string): void {
    console.log('FILE LOG:', message);
  }
}