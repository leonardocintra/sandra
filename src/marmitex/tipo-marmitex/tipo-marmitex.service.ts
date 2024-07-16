import { Injectable } from '@nestjs/common';
import { CreateTipoMarmitexDto } from './dto/create-tipo-marmitex.dto';
import { UpdateTipoMarmitexDto } from './dto/update-tipo-marmitex.dto';
import { PrismaService } from 'src/prisma.service';
import { RestauranteService } from 'src/restaurante/restaurante.service';

@Injectable()
export class TipoMarmitexService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly restauranteService: RestauranteService,
  ) {}

  async create(createTipoMarmitexDto: CreateTipoMarmitexDto) {
    await this.restauranteService.findOne(createTipoMarmitexDto.restaurante.id);

    return this.prisma.tipoMarmitex.create({
      data: {
        descricao: createTipoMarmitexDto.descricao,
        restauranteId: createTipoMarmitexDto.restaurante.id,
      },
    });
  }

  async findAll(restauranteId: number) {
    const restaurante = await this.restauranteService.findOne(restauranteId);

    return this.prisma.tipoMarmitex.findMany({
      select: {
        id: true,
        descricao: true,
      },
      where: { restauranteId: restaurante.id },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoMarmitex`;
  }

  update(id: number, updateTipoMarmitexDto: UpdateTipoMarmitexDto) {
    return `This action updates a #${id} tipoMarmitex`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoMarmitex`;
  }
}
