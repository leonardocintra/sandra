import { Test, TestingModule } from '@nestjs/testing';
import { TipoMarmitexController } from './tipo-marmitex.controller';
import { TipoMarmitexService } from './tipo-marmitex.service';

describe('TipoMarmitexController', () => {
  let controller: TipoMarmitexController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoMarmitexController],
      providers: [TipoMarmitexService],
    }).compile();

    controller = module.get<TipoMarmitexController>(TipoMarmitexController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
