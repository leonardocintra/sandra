import { IsNumber, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateItemDto {
  @MaxLength(60)
  @IsString()
  descricao: string;

  @IsPositive()
  @IsNumber()
  tipoItemId: number;
}
