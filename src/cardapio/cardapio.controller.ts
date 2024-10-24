import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardapioService } from './cardapio.service';
import { CardapioDto } from './dto/cardapio.dto';

@Controller('cardapio')
export class CardapioController {
  constructor(private readonly cardapioService: CardapioService) { }

  @Post()
  create(@Body() createCardapioDto: CardapioDto) {
    return this.cardapioService.create(createCardapioDto);
  }

  @Get(':restaurante')
  findByRestaurante(@Param('restaurante') restaurante: string) {
    return this.cardapioService.findByRestaurante(restaurante);
  }

  @Patch(':restaurante')
  update(@Param('restaurante') restaurante: string, @Body() updateCardapioDto: CardapioDto) {
    return this.cardapioService.update(restaurante, updateCardapioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardapioService.remove(+id);
  }
}
