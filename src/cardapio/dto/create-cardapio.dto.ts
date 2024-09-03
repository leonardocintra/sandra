import { IsArray, IsString } from "class-validator";

export class CreateCardapioDto {

  @IsString()
  restaurante: string;

  @IsString()
  tipo: string;

  @IsArray()
  @IsString({ each: true })  // Ensure each item is a string
  items: Array<string>;
}
