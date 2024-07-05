import { Injectable } from '@nestjs/common';
import { CreateMarmitexDto } from './dto/create-marmitex.dto';
import { UpdateMarmitexDto } from './dto/update-marmitex.dto';
import { PrismaService } from 'src/prisma.service';
import { RestauranteService } from 'src/restaurante/restaurante.service';

@Injectable()
export class MarmitexService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly restauranteService: RestauranteService,
  ) {}

  async create(createMarmitexDto: CreateMarmitexDto) {
    return 'This action adds a new marmitex';
  }

  findAll() {
    return `This action returns all marmitex`;
  }

  findOne(id: number) {
    return `This action returns a #${id} marmitex`;
  }

  update(id: number, updateMarmitexDto: UpdateMarmitexDto) {
    return `This action updates a #${id} marmitex`;
  }

  remove(id: number) {
    return `This action removes a #${id} marmitex`;
  }
}
