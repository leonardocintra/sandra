import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfiguracaoService } from './configuracao.service';
import { CreateConfiguracaoDto } from './dto/create-configuracao.dto';
import { UpdateConfiguracaoDto } from './dto/update-configuracao.dto';

@Controller('configuracao')
export class ConfiguracaoController {
  constructor(private readonly configuracaoService: ConfiguracaoService) {}

  @Post()
  create(@Body() createConfiguracaoDto: CreateConfiguracaoDto) {
    return this.configuracaoService.create(createConfiguracaoDto);
  }

  @Get()
  findAll() {
    return this.configuracaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configuracaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConfiguracaoDto: UpdateConfiguracaoDto) {
    return this.configuracaoService.update(+id, updateConfiguracaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.configuracaoService.remove(+id);
  }
}
