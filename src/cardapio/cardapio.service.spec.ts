import { ItemService } from './../items/item/item.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CardapioService } from './cardapio.service';
import { PrismaService } from 'src/prisma.service';

describe('CardapioService', () => {
  let service: CardapioService;
  let prismaService: PrismaService
  let itemService: ItemService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardapioService, {
        provide: PrismaService,
        useValue: {}
      }, {
          provide: ItemService,
          useValue: {}
        }],
    }).compile();

    service = module.get<CardapioService>(CardapioService);
    prismaService = module.get<PrismaService>(PrismaService);
    itemService = module.get<ItemService>(ItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(prismaService).toBeDefined();
    expect(itemService).toBeDefined();
  });
});
