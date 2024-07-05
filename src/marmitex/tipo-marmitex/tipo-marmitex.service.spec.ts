import { Test, TestingModule } from '@nestjs/testing';
import { TipoMarmitexService } from './tipo-marmitex.service';

describe('TipoMarmitexService', () => {
  let service: TipoMarmitexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoMarmitexService],
    }).compile();

    service = module.get<TipoMarmitexService>(TipoMarmitexService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
