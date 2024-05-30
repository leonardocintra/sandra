import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma.service';
import { TipoItemService } from '../tipo-item/tipo-item.service';

@Injectable()
export class ItemService {
  constructor(
    private readonly prisma: PrismaService,
    private tipoItemService: TipoItemService,
  ) {}

  create(createItemDto: CreateItemDto) {
    return this.prisma.item.create({
      data: createItemDto,
    });
  }

  async findAll(restauranteId: number) {
    const tipoItems = await this.tipoItemService.findAll(restauranteId);

    return await this.prisma.item.findMany({
      where: {
        tipoItemId: {
          in: tipoItems.map((tipoItem) => tipoItem.id),
        },
      },
      include: {
        tipoItem: {
          select: {
            descricao: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
