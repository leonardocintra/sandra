import { Injectable, Logger } from '@nestjs/common';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { PrismaService } from 'src/prisma.service';
import { OrganizationsService } from 'src/kinde/organizations/organizations.service';
import { UsersService } from 'src/kinde/users/users.service';
import { IOrganization } from 'restaurante';
import { ItemService } from 'src/item/item.service';
import { CardapioService } from 'src/cardapio/cardapio.service';
import { obterDadosCardapioIniciais, obterDadosConfiguracaoMarmitexIniciais, obterDadosItemIniciais } from 'src/fixtures/initial-data';
import { ConfiguracaoService } from 'src/marmitex/configuracao/configuracao.service';

@Injectable()
export class RestauranteService {
  private readonly logger = new Logger(RestauranteService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly kindeOrganization: OrganizationsService,
    private readonly userService: UsersService,
    private readonly itemService: ItemService,
    private readonly cardapioService: CardapioService,
    private readonly configuracaoService: ConfiguracaoService,
  ) { }

  async create(createRestauranteDto: CreateRestauranteDto) {
    // TODO: criar na api backend
    const restaurante = await this.prisma.restaurante.create({
      data: {
        descricao: createRestauranteDto.descricao,
      }
    });

    try {
      const organization: IOrganization = await this.kindeOrganization.create({
        name: restaurante.descricao,
        external_id: restaurante.id.toString(),
      });

      this.addUserToOrganization(organization.code, createRestauranteDto.userId);

      this.createInitialItemsData(organization.code);
      // TODO: criar usuario no sistema sandraAPI
      return restaurante;
    } catch (err) {
      this.logger.error(`Ocorreu um erro ao criar um restaurante. Erro: ${err}`);
    }
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
      // adiciona os itens padrao de todos os restaurantes
      this.itemService.create({
        restaurante: i.restaurante,
        tipo: i.tipo,
        items: i.items
      })
    });

    const cardapioIniciais = obterDadosCardapioIniciais(restaurante)
    cardapioIniciais.map(i => {
      // adiciona um cardapio inicial padrao
      this.cardapioService.create({
        restaurante: i.restaurante,
        tipo: i.tipo,
        items: i.items
      })
    });

    const configuracoesIniciais = obterDadosConfiguracaoMarmitexIniciais(restaurante);
    configuracoesIniciais.map(i => {
      // adiciona configuracoes iniciais
      this.configuracaoService.create({
        restaurante,
        maxCarnes: i.maxCarnes,
        maxGuarnicoes: i.maxGuarnicoes,
        maxSaladas: i.maxSaladas,
        preco: i.preco,
        tipoMarmitex: i.tipoMarmitex
      })
    });
  }
}
