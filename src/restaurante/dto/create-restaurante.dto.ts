import { IsString, MaxLength } from 'class-validator';

export class CreateRestauranteDto {
  @MaxLength(100)
  @IsString()
  descricao: string;

  @IsString()
  userId: string;
}
