import {
  IsNumber,
  IsObject,
  IsPositive,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';

class RestauranteDto {
  @IsNumber()
  @IsPositive()
  id: number;

  @MaxLength(80)
  @IsString()
  descricao: string;
}

export class CreateTipoMarmitexDto {
  @MaxLength(40)
  @IsString()
  descricao: string;

  @IsObject()
  @ValidateNested({ each: true })
  restaurante: RestauranteDto;
}
