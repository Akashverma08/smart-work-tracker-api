import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CommonService } from '../common/common.service';

@Injectable()
export class CatsService {
  constructor(
    @Inject(forwardRef(() => CommonService))
    private commonService: CommonService,
  ) {}

  getCats() {
    return 'Cats Service';
  }
}