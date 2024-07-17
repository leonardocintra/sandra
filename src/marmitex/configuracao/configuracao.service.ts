import { Injectable } from '@nestjs/common';
import { CreateConfiguracaoDto } from './dto/create-configuracao.dto';
import { UpdateConfiguracaoDto } from './dto/update-configuracao.dto';

@Injectable()
export class ConfiguracaoService {
  create(createConfiguracaoDto: CreateConfiguracaoDto) {
    return 'This action adds a new configuracao';
  }

  findAll() {
    return `This action returns all configuracao`;
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
