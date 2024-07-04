import { Test, TestingModule } from '@nestjs/testing';
import { ItemService } from './item.service';
import { PrismaService } from 'src/prisma.service';
import { TipoItemService } from '../tipo-item/tipo-item.service';
import { NotFoundException } from '@nestjs/common';

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
              findFirstOrThrow: jest.fn(),
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

  describe('findOne', () => {
    it('should return an item if it exists', async () => {
      const item = {
        id: 63,
        descricao: 'Picanha',
        tipoItemId: 49,
        tipoItem: {
          id: 49,
          descricao: 'Carnes',
        },
      };

      jest
        .spyOn(prismaService.item, 'findFirstOrThrow')
        .mockResolvedValue(item);

      expect(await service.findOne(1)).toEqual(item);
    });

    it('should throw an error if the item does not exist', async () => {
      jest
        .spyOn(prismaService.item, 'findFirstOrThrow')
        .mockRejectedValue(new NotFoundException());

      await expect(service.findOne(31)).rejects.toThrow(NotFoundException);
    });
  });
});
