import { PrismaService } from './../../prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfiguracaoService } from './configuracao.service';

describe('ConfiguracaoService', () => {
  let service: ConfiguracaoService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConfiguracaoService,
        {
          provide: PrismaService,
          useValue: {
            configuracao: {
              create: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<ConfiguracaoService>(ConfiguracaoService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
