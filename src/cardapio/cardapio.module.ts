import { Module } from '@nestjs/common';
import { CardapioService } from './cardapio.service';
import { CardapioController } from './cardapio.controller';
import { ItemModule } from 'src/items/item/item.module';

@Module({
  controllers: [CardapioController],
  providers: [CardapioService],
  imports: [ItemModule]
})
export class CardapioModule { }
