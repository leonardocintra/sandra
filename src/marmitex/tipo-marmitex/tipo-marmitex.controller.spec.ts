import { Test, TestingModule } from '@nestjs/testing';
import { TipoMarmitexController } from './tipo-marmitex.controller';
import { TipoMarmitexService } from './tipo-marmitex.service';
import { PrismaService } from 'src/prisma.service';
import { RestauranteService } from 'src/restaurante/restaurante.service';

describe('TipoMarmitexController', () => {
  let controller: TipoMarmitexController;
  let prismaService: PrismaService;
  let restauranteService: RestauranteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoMarmitexController],
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

    controller = module.get<TipoMarmitexController>(TipoMarmitexController);
    prismaService = module.get<PrismaService>(PrismaService);
    restauranteService = module.get<RestauranteService>(RestauranteService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(prismaService).toBeDefined();
    expect(restauranteService).toBeDefined();
  });
});
