import { IsNumber, IsObject, IsOptional, IsPositive, IsString, MaxLength, ValidateNested } from "class-validator";


class TipoDto {
  @IsPositive()
  @IsNumber()
  id: number;

  @IsString()
  @MaxLength(60)
  @IsOptional()
  descricao: string;
}

export class CreateConfiguracaoDto {
  @IsObject()
  @ValidateNested({ each: true })
  tipoItem: TipoDto;

  @IsObject()
  @ValidateNested({ each: true })
  tipoMarmitex: TipoDto

  @IsPositive()
  @IsNumber()
  quantidade: number;
}
