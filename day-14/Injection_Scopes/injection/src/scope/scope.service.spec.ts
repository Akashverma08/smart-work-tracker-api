import { Test, TestingModule } from '@nestjs/testing';
import { ScopeService } from './scope.service.js';

describe('ScopeService', () => {
  let service: ScopeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScopeService],
    }).compile();

    service = module.get<ScopeService>(ScopeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
