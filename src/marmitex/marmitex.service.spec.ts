import { Test, TestingModule } from '@nestjs/testing';
import { MarmitexService } from './marmitex.service';

describe('MarmitexService', () => {
  let service: MarmitexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarmitexService],
    }).compile();

    service = module.get<MarmitexService>(MarmitexService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
