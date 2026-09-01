import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CatsService } from '../cats/cats.service';

@Injectable()
export class CommonService {
  constructor(
    @Inject(forwardRef(() => CatsService))
    private catsService: CatsService,
  ) {}

  getCommon() {
    return 'Common Service';
  }
}