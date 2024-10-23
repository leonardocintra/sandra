import { IsEnum, IsNumber, IsString } from "class-validator";

export enum TipoMarmitexEnum {
  PEQUENO = "Pequeno",
  MEDIO = "Médio",
  GRANDE = "Grande"
}

export class CreateConfiguracaoDto {
  @IsString()
  restaurante: string;

  @IsString()
  @IsEnum(TipoMarmitexEnum)
  tipoMarmitex: string;

  @IsNumber()
  maxSaladas: number;

  @IsNumber()
  maxCarnes: number

  @IsNumber()
  maxGuarnicoes: number;

  @IsNumber()
  preco: number
}









