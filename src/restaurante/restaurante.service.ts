import { Injectable, Logger } from '@nestjs/common';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { PrismaService } from 'src/prisma.service';
import { OrganizationsService } from 'src/kinde/organizations/organizations.service';
import { UsersService } from 'src/kinde/users/users.service';
import { IOrganization } from 'restaurante';
import { ItemService } from 'src/item/item.service';
import { obterDadosItemIniciais } from 'src/item/datas/item.initial-data';

@Injectable()
export class RestauranteService {
  private readonly logger = new Logger(RestauranteService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly kindeOrganization: OrganizationsService,
    private readonly userService: UsersService,
    private readonly itemService: ItemService
  ) { }

  async create(createRestauranteDto: CreateRestauranteDto) {
    // TODO: criar na api backend
    const restaurante = await this.prisma.restaurante.create({
      data: {
        descricao: createRestauranteDto.descricao,
      }
    });

    const organization: IOrganization = await this.kindeOrganization.create({
      name: restaurante.descricao,
      external_id: restaurante.id.toString(),
    });

    this.addUserToOrganization(organization.code, createRestauranteDto.userId);

    this.createInitialItemsData(organization.code);
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

  private addUserToOrganization(orgCode: string, userId: string) {
    try {
      this.userService.create({ orgCode, userId });
    } catch (err) {
      this.logger.error(`Erro ao adicionar usuario no restaurante/organizacao: ${orgCode}`);
    }
  }

  private createInitialItemsData(restaurante: string) {
    const itensIniciais = obterDadosItemIniciais(restaurante);
    itensIniciais.map(i => {
      this.itemService.create({
        restaurante: i.restaurante,
        tipo: i.tipo,
        items: i.items
      })
    })
  }
}
