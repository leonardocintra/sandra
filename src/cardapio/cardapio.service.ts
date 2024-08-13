import { Injectable } from '@nestjs/common';
import { CreateCardapioDto } from './dto/create-cardapio.dto';
import { UpdateCardapioDto } from './dto/update-cardapio.dto';
import { PrismaService } from 'src/prisma.service';
import { ItemService } from 'src/items/item/item.service';

@Injectable()
export class CardapioService {

  constructor(
    private readonly prisma: PrismaService,
    private itemService: ItemService
  ) { }

  async create(createCardapioDto: CreateCardapioDto) {
    const restaurante = await this.prisma.restaurante.findFirst();
    const itensDoRestaurante = await this.itemService.findAllByRestauranteId(restaurante.id);
    
    if (!itensDoRestaurante) {
      throw new Error('Não há itens cadastrados para este restaurante');
    }    
    
    let cardapio = await this.prisma.cardapio.findFirst()

    if (!cardapio) {
      cardapio = await this.prisma.cardapio.create({
        data: {
          restauranteId: restaurante.id
        }
      });
    }    

    await this.prisma.cardapioItens.deleteMany({
      where: {
        cardapioId: cardapio.id
      }
    });

    // TODO: verificar se todos os itens que estão sendo inseridos são realmente o mesmo restaurante


    createCardapioDto.items.map(async item => {
      await this.prisma.cardapioItens.create({
        data: {
          cardapioId: cardapio.id,
          itemId: item.id
        }
      });
    });

    return this.prisma.cardapioItens.findFirst();
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
