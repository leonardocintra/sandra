import { Injectable } from '@nestjs/common';
import { CreateConfiguracaoDto } from './dto/create-configuracao.dto';
import { UpdateConfiguracaoDto } from './dto/update-configuracao.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ConfiguracaoService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createConfiguracaoDto: CreateConfiguracaoDto) {
    const result = await this.prisma.configuracaoMarmitex.create({
      select: {
        id: true,
        quantidade: true,
        tipoItem: {
          select: {
            id: true,
            descricao: true,
          },
        },
        tipoMarmitex: {
          select: {
            id: true,
            descricao: true,
          },
        },
      },
      data: {
        quantidade: createConfiguracaoDto.quantidade,
        tipoItemId: createConfiguracaoDto.tipoItem.id,
        tipoMarmitexId: createConfiguracaoDto.tipoMarmitex.id,
      }
    })
    return result;
  }

  async findAll() {
    const configs = await this.prisma.configuracaoMarmitex.findMany({
      select: {
        id: true,
        quantidade: true,
        tipoItem: {
          select: {
            id: true,
            descricao: true,
          },
        },
        tipoMarmitex: {
          select: {
            id: true,
            descricao: true,
          },
        },
      },
    });

    const result = configs.reduce((acc, item) => {
      const marmitexIndex = acc.findIndex(
        (m) => m.tipoMarmitex === item.tipoMarmitex.id
      );

      const config = {
        quantidade: item.quantidade,
        tipoItem: {
          id: item.tipoItem.id,
          descricao: item.tipoItem.descricao,
        },
      };

      if (marmitexIndex === -1) {
        acc.push({
          tipoMarmitex: item.tipoMarmitex.id,
          descricao: item.tipoMarmitex.descricao,
          configuracao: [config],
        });
      } else {
        acc[marmitexIndex].configuracao.push(config);
      }

      return acc;
    }, []);

    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} configuracao`;
  }

  update(id: number, updateConfiguracaoDto: UpdateConfiguracaoDto) {
    return `This action updates a #${id} configuracao`;
  }

  remove(id: number) {
    return `This action removes a #${id} configuracao`;
  }
}
