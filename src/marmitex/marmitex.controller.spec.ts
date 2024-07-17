import { Test, TestingModule } from '@nestjs/testing';
import { MarmitexController } from './marmitex.controller';
import { MarmitexService } from './marmitex.service';
import { PrismaService } from 'src/prisma.service';
import { RestauranteService } from 'src/restaurante/restaurante.service';

describe('MarmitexController', () => {
  let controller: MarmitexController;
  let prismaService: PrismaService;
  let restauranteService: RestauranteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarmitexController],
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

    controller = module.get<MarmitexController>(MarmitexController);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
