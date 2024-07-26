import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoMarmitexService } from './tipo-marmitex.service';
import { CreateTipoMarmitexDto } from './dto/create-tipo-marmitex.dto';
import { UpdateTipoMarmitexDto } from './dto/update-tipo-marmitex.dto';

@Controller('marmitex/tipo-marmitex')
export class TipoMarmitexController {
  constructor(private readonly tipoMarmitexService: TipoMarmitexService) {}

  @Post()
  create(@Body() createTipoMarmitexDto: CreateTipoMarmitexDto) {
    return this.tipoMarmitexService.create(createTipoMarmitexDto);
  }

  @Get('/restaurante/:id')
  findAll(@Param('id') id) {
    return this.tipoMarmitexService.findAll(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoMarmitexService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoMarmitexDto: UpdateTipoMarmitexDto) {
    return this.tipoMarmitexService.update(+id, updateTipoMarmitexDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoMarmitexService.remove(+id);
  }
}
