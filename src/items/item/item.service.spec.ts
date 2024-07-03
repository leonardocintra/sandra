import { Test, TestingModule } from '@nestjs/testing';
import { ItemService } from './item.service';
import { PrismaService } from 'src/prisma.service';
import { TipoItemService } from '../tipo-item/tipo-item.service';

describe('ItemService', () => {
  let service: ItemService;
  let prismaService: PrismaService;
  let tipoItemService: TipoItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemService,
        {
          provide: PrismaService,
          useValue: {
            item: {
              create: jest.fn(),
            },
          },
        },
        {
          provide: TipoItemService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ItemService>(ItemService);
    prismaService = module.get<PrismaService>(PrismaService);
    tipoItemService = module.get<TipoItemService>(TipoItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(prismaService).toBeDefined();
    expect(tipoItemService).toBeDefined();
  });
});
