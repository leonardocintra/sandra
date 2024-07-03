import { Test, TestingModule } from '@nestjs/testing';
import { KindeService } from './kinde.service';
import { HttpService } from '@nestjs/axios';

describe('KindeService', () => {
  let service: KindeService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        KindeService,
        {
          provide: HttpService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<KindeService>(KindeService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(httpService).toBeDefined();
  });
});
