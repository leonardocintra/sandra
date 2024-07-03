import { Test, TestingModule } from '@nestjs/testing';
import { TipoItemController } from './tipo-item.controller';
import { TipoItemService } from './tipo-item.service';
import { PrismaService } from 'src/prisma.service';

describe('TipoItemController', () => {
  let controller: TipoItemController;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoItemController],
      providers: [
        TipoItemService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TipoItemController>(TipoItemController);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(prismaService).toBeDefined();
  });
});
