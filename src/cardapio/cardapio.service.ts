import { Injectable, Logger } from '@nestjs/common';
import { CardapioDto } from './dto/cardapio.dto';
import { CardapioRepository } from './cardapio.repository';
import { Cardapio } from './entities/cardapio.entity';

@Injectable()
export class CardapioService {
  private readonly logger = new Logger(CardapioService.name);

  constructor(private readonly cardapioRepository: CardapioRepository) { }

  create(createCardapioDto: CardapioDto) {
    return this.cardapioRepository.upsertOne(
      Cardapio.newInstanceFromDto(createCardapioDto),
    );
  }

  findByRestaurante(restaurante: string) {
    return this.cardapioRepository.findByRestaurante(restaurante);
  }

  update(restaurante: string, updateCardapioDto: CardapioDto) {
    this.logger.log(`Chamado para atualizar cardapio de ${restaurante}`)

    try {
      return this.cardapioRepository.upsertOne(
        Cardapio.newInstanceFromDto(updateCardapioDto),
      );
    } catch (error) {
      this.logger.error(`Erro ao atualizar cardapio: ${error.message}`);
      throw error;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} cardapio`;
  }
}
