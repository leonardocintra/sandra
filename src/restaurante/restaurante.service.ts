import { Injectable } from '@nestjs/common';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RestauranteService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRestauranteDto: CreateRestauranteDto) {
    return this.prisma.restaurante.create({
      data: createRestauranteDto,
    });
  }

  findAll() {
    return this.prisma.restaurante.findMany();
  }

  findOne(id: number) {
    return this.prisma.restaurante.findFirstOrThrow({
      where: { id },
    });
  }

  update(id: number, updateRestauranteDto: UpdateRestauranteDto) {
    return `This action updates a #${id} restaurante`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurante`;
  }
}
