import { Test, TestingModule } from '@nestjs/testing';
import { CardapioController } from './cardapio.controller';
import { CardapioService } from './cardapio.service';
import { PrismaService } from 'src/prisma.service';
import { ItemService } from 'src/items/item/item.service';

describe('CardapioController', () => {
  let controller: CardapioController;
  let prismaService: PrismaService;
  let itemService: ItemService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardapioController],
      providers: [CardapioService, {
        provide: PrismaService,
        useValue: {}
      }, {
          provide: ItemService,
          useValue: {}
        }],
    }).compile();

    controller = module.get<CardapioController>(CardapioController);
    prismaService = module.get<PrismaService>(PrismaService);
    itemService = module.get<ItemService>(ItemService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(prismaService).toBeDefined();
    expect(itemService).toBeDefined();
  });
});
