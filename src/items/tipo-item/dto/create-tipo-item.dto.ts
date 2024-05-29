import { IsNumber, IsPositive, IsString, MaxLength, Min } from 'class-validator';

export class CreateTipoItemDto {
  @IsString()
  @MaxLength(60)
  descricao: string;

  @IsPositive()
  @IsNumber()
  restauranteId: number;
}
