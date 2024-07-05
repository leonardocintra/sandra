import { Test, TestingModule } from '@nestjs/testing';
import { MarmitexController } from './marmitex.controller';
import { MarmitexService } from './marmitex.service';

describe('MarmitexController', () => {
  let controller: MarmitexController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarmitexController],
      providers: [MarmitexService],
    }).compile();

    controller = module.get<MarmitexController>(MarmitexController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
