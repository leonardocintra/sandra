import { Test, TestingModule } from '@nestjs/testing';
import { KindeService } from './kinde.service';

describe('KindeService', () => {
  let service: KindeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KindeService],
    }).compile();

    service = module.get<KindeService>(KindeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
