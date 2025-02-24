import { Injectable } from '@nestjs/common';
import { CreateConfiguracaoDto } from './dto/create-configuracao.dto';
import { UpdateConfiguracaoDto } from './dto/update-configuracao.dto';
import { ConfiguracaoRepository } from './configuracao.repository';
import { ConfiguracaoMarmitex } from './entities/configuracao.entity';

@Injectable()
export class ConfiguracaoService {
  constructor(private readonly configuracaoRepository: ConfiguracaoRepository) { }

  async create(createConfiguracaoDto: CreateConfiguracaoDto) {
    return this.configuracaoRepository.upsertOne(
      ConfiguracaoMarmitex.newInstanceFromDto(createConfiguracaoDto),
    );
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
