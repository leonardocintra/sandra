import { IsArray, IsString } from "class-validator";

export class CardapioDto {

  @IsString()
  restaurante: string;

  @IsString()
  tipo: string;

  @IsArray()
  @IsString({ each: true })
  items: Array<string>;
}
