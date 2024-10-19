import { Module } from '@nestjs/common';
import { CardapioService } from './cardapio.service';
import { CardapioController } from './cardapio.controller';
import { CardapioRepository } from './cardapio.repository';

@Module({
  controllers: [CardapioController],
  providers: [CardapioService, CardapioRepository],
  exports: [CardapioService],
})
export class CardapioModule { }
