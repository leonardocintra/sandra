import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarmitexService } from './marmitex.service';
import { CreateMarmitexDto } from './dto/create-marmitex.dto';
import { UpdateMarmitexDto } from './dto/update-marmitex.dto';

@Controller('marmitex')
export class MarmitexController {
  constructor(private readonly marmitexService: MarmitexService) {}

  @Post()
  create(@Body() createMarmitexDto: CreateMarmitexDto) {
    return this.marmitexService.create(createMarmitexDto);
  }

  @Get()
  findAll() {
    return this.marmitexService.findAll();
  }

  @Get('/restaurante/:id')
  findOne(@Param('id') id: string) {
    return this.marmitexService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarmitexDto: UpdateMarmitexDto) {
    return this.marmitexService.update(+id, updateMarmitexDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marmitexService.remove(+id);
  }
}
