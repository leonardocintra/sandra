import { Injectable } from '@nestjs/common';
import { CreateCardapioDto } from './dto/create-cardapio.dto';
import { UpdateCardapioDto } from './dto/update-cardapio.dto';
import { CardapioRepository } from './cardapio.repository';

@Injectable()
export class CardapioService {

  constructor(private readonly cardapioRepository: CardapioRepository) { }

  create(createCardapioDto: CreateCardapioDto) {
    return 'This action adds a new cardapio';
  }

  findAll() {
    return this.cardapioRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} cardapio`;
  }

  update(id: number, updateCardapioDto: UpdateCardapioDto) {
    return `This action updates a #${id} cardapio`;
  }

  remove(id: number) {
    return `This action removes a #${id} cardapio`;
  }
}
