import { Test, TestingModule } from '@nestjs/testing';
import { TipoItemController } from './tipo-item.controller';
import { TipoItemService } from './tipo-item.service';

describe('TipoItemController', () => {
  let controller: TipoItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoItemController],
      providers: [TipoItemService],
    }).compile();

    controller = module.get<TipoItemController>(TipoItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
