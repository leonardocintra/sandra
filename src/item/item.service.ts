import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemRepository } from './item.repository';

@Injectable()
export class ItemService {

  constructor(private readonly itemRepository: ItemRepository) { }

  create(createItemDto: CreateItemDto) {
    return this.itemRepository.upsertOne(createItemDto);
  }

  async findOne(restauranteId: string) {
    const result = await this.itemRepository.findByOne(restauranteId)

    if (!result || result.length === 0) {
      throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
