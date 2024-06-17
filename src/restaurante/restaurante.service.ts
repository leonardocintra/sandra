import { Injectable } from '@nestjs/common';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { PrismaService } from 'src/prisma.service';
import { OrganizationsService } from 'src/kinde/organizations/organizations.service';

@Injectable()
export class RestauranteService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly kindeOrganization: OrganizationsService,
  ) {}

  async create(createRestauranteDto: CreateRestauranteDto) {
    // TODO: criar na api backend
    const restaurante = await this.prisma.restaurante.create({
      data: createRestauranteDto,
    });

    // TODO: criar na api Kind (auth)
    // await this.kindeOrganization.create({
    //   name: restaurante.descricao,
    //   external_id: restaurante.id.toString(),
    // });

    // TODO: mover usuarios para a nova organization

    // TODO: criar usuario no sistema sandraAPI

    return restaurante;
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

  async remove(id: number) {
    // TODO: remover organization do kinde
    return `This action removes a #${id} restaurante`;
  }
}
