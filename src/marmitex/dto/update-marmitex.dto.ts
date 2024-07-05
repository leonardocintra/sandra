import { PartialType } from '@nestjs/mapped-types';
import { CreateMarmitexDto } from './create-marmitex.dto';

export class UpdateMarmitexDto extends PartialType(CreateMarmitexDto) {}
