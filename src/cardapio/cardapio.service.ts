import { Injectable } from '@nestjs/common';
import { CreateCardapioDto } from './dto/create-cardapio.dto';
import { UpdateCardapioDto } from './dto/update-cardapio.dto';

@Injectable()
export class CardapioService {
  create(createCardapioDto: CreateCardapioDto) {
    return 'This action adds a new cardapio';
  }

  findAll() {
    return `This action returns all cardapio`;
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
