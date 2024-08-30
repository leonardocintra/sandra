import { Injectable } from '@nestjs/common';
import { CreateConfiguracaoDto } from './dto/create-configuracao.dto';
import { UpdateConfiguracaoDto } from './dto/update-configuracao.dto';
import { PrismaService } from 'src/prisma.service';
import { ConfiguracaoRepository } from './configuracao.repository';

@Injectable()
export class ConfiguracaoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configuracaoRepository: ConfiguracaoRepository,
  ) { }

  async create(createConfiguracaoDto: CreateConfiguracaoDto) {
    return `This action create a configuracao`;
  }

  async findAll() {
    const result = await this.configuracaoRepository.findAll();
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
