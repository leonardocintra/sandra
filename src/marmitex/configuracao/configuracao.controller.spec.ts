import { Test, TestingModule } from '@nestjs/testing';
import { ConfiguracaoController } from './configuracao.controller';
import { ConfiguracaoService } from './configuracao.service';
import { PrismaService } from 'src/prisma.service';

describe('ConfiguracaoController', () => {
  let controller: ConfiguracaoController;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfiguracaoController],
      providers: [ConfiguracaoService, {
        provide: PrismaService,
        useValue: {
          create: jest.fn(),
          findFirstOrThrow: jest.fn(),
        },
      },],
    }).compile();

    controller = module.get<ConfiguracaoController>(ConfiguracaoController);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(prismaService).toBeDefined();
  });
});
