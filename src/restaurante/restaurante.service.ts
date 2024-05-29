import { Injectable } from '@nestjs/common';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RestauranteService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRestauranteDto: CreateRestauranteDto) {
    return 'This action adds a new restaurante';
  }

  findAll() {
    return this.prisma.restaurante.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurante`;
  }

  update(id: number, updateRestauranteDto: UpdateRestauranteDto) {
    return `This action updates a #${id} restaurante`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurante`;
  }
}
