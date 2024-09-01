export class Cardapio {
  restaurante: string;
  tipo: string;
  items: Array<String>;

  static newInstanceFromDynamoDB(data: any): Cardapio {
    const result = new Cardapio();

    result.restaurante = data.restaurante.S;
    result.tipo = data.tipo.S;
    result.items = data.items.SS;

    return result;
  }
}
