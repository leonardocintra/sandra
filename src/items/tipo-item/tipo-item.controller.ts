import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipoItemService } from './tipo-item.service';
import { CreateTipoItemDto } from './dto/create-tipo-item.dto';
import { UpdateTipoItemDto } from './dto/update-tipo-item.dto';

@Controller('tipo-item')
export class TipoItemController {
  constructor(private readonly tipoItemService: TipoItemService) {}

  @Post()
  create(@Body() createTipoItemDto: CreateTipoItemDto) {
    return this.tipoItemService.create(createTipoItemDto);
  }

  @Get('/restaurante/:id')
  findAll(@Param('id') id: number) {
    return this.tipoItemService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoItemService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipoItemDto: UpdateTipoItemDto,
  ) {
    return this.tipoItemService.update(+id, updateTipoItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoItemService.remove(+id);
  }
}
