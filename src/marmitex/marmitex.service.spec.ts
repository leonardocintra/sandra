import { Test, TestingModule } from '@nestjs/testing';
import { MarmitexService } from './marmitex.service';
import { PrismaService } from 'src/prisma.service';
import { RestauranteService } from 'src/restaurante/restaurante.service';

describe('MarmitexService', () => {
  let service: MarmitexService;
  let prismaService: PrismaService;
  let restauranteService: RestauranteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MarmitexService,
        {
          provide: PrismaService,
          useValue: {
            item: {
              create: jest.fn(),
              findFirstOrThrow: jest.fn(),
            },
          },
        },
        {
          provide: RestauranteService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<MarmitexService>(MarmitexService);
    prismaService = module.get<PrismaService>(PrismaService);
    restauranteService = module.get<RestauranteService>(RestauranteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(prismaService).toBeDefined();
    expect(restauranteService).toBeDefined();
  });
});
