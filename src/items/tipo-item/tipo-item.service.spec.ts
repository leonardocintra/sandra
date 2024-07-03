import { Test, TestingModule } from '@nestjs/testing';
import { TipoItemService } from './tipo-item.service';
import { PrismaService } from 'src/prisma.service';

describe('TipoItemService', () => {
  let service: TipoItemService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TipoItemService,
        {
          provide: PrismaService,
          useValue: {
            tipoItem: {
              create: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<TipoItemService>(TipoItemService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(prismaService).toBeDefined();
  });
});
