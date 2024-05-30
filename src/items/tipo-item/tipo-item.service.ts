import { Injectable } from '@nestjs/common';
import { CreateTipoItemDto } from './dto/create-tipo-item.dto';
import { UpdateTipoItemDto } from './dto/update-tipo-item.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TipoItemService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTipoItemDto: CreateTipoItemDto) {
    try {
      return this.prisma.tipoItem.create({
        data: createTipoItemDto,
      });
    } catch (error) {
      console.error(error);
    }
  }

  findAll() {
    return this.prisma.tipoItem.findMany({
      include: {
        restaurante: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoItem`;
  }

  update(id: number, updateTipoItemDto: UpdateTipoItemDto) {
    return `This action updates a #${id} tipoItem`;
  }

  remove(id: number) {
    return this.prisma.tipoItem.delete({
      where: { id },
    });
  }
}
