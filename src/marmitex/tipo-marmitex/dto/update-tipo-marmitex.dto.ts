import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoMarmitexDto } from './create-tipo-marmitex.dto';

export class UpdateTipoMarmitexDto extends PartialType(CreateTipoMarmitexDto) {}
