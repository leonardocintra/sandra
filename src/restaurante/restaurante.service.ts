import { Injectable } from '@nestjs/common';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { PrismaService } from 'src/prisma.service';
import { OrganizationsService } from 'src/kinde/organizations/organizations.service';
import { UsersService } from 'src/kinde/users/users.service';

@Injectable()
export class RestauranteService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly kindeOrganization: OrganizationsService,
    private readonly userService: UsersService
  ) { }

  async create(createRestauranteDto: CreateRestauranteDto) {
    // TODO: criar na api backend
    const restaurante = await this.prisma.restaurante.create({
      data: {
        descricao: createRestauranteDto.descricao,
      }
    });

    const organization = await this.kindeOrganization.create({
      name: restaurante.descricao,
      external_id: restaurante.id.toString(),
    });

    // TODO: mover usuarios para a nova organization
    this.userService.create({
      orgCode: organization.code,
      userId: createRestauranteDto.userId
    });

    // TODO: criar usuario no sistema sandraAPI

    // TODO: salvar no dynamodb os cardapios padrão

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
