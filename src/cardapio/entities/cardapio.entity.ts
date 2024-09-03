import { CreateCardapioDto } from "../dto/create-cardapio.dto";

export class Cardapio {
  restaurante: string;
  tipo: string;
  items: Array<string>;

  static newInstanceFromDynamoDB(data: any): Cardapio {
    const result = new Cardapio();

    result.restaurante = data.restaurante.S;
    result.tipo = data.tipo.S;
    result.items = data.items.SS;

    return result;
  }

  static newInstanceFromDto(data: CreateCardapioDto): Cardapio {
    const result = new Cardapio();

    result.restaurante = data.restaurante;
    result.tipo = data.tipo;
    result.items = data.items;

    return result;
  }
}
