import { Test, TestingModule } from '@nestjs/testing';
import { TipoMarmitexService } from './tipo-marmitex.service';
import { PrismaService } from 'src/prisma.service';
import { RestauranteService } from 'src/restaurante/restaurante.service';

describe('TipoMarmitexService', () => {
  let service: TipoMarmitexService;
  let prismaService: PrismaService;
  let restauranteService: RestauranteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TipoMarmitexService,
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

    service = module.get<TipoMarmitexService>(TipoMarmitexService);
    prismaService = module.get<PrismaService>(PrismaService);
    restauranteService = module.get<RestauranteService>(RestauranteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(prismaService).toBeDefined();
    expect(restauranteService).toBeDefined();
  });
});
