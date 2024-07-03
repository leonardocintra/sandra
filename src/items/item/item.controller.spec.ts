import { Test, TestingModule } from '@nestjs/testing';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { PrismaService } from 'src/prisma.service';
import { TipoItemService } from '../tipo-item/tipo-item.service';

describe('ItemController', () => {
  let controller: ItemController;
  let prismaService: PrismaService;
  let tipoItemService: TipoItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemController],
      providers: [
        ItemService,
        {
          provide: PrismaService,
          useClass: PrismaService,
        },
        {
          provide: TipoItemService,
          useClass: TipoItemService,
        },
      ],
    }).compile();

    controller = module.get<ItemController>(ItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
