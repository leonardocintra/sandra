export class Item {
  restaurante: string;
  tipo: string;
  items: Array<String>;

  static newInstanceFromDynamoDB(data: any): Item {
    const result = new Item();

    result.restaurante = data.restaurante.S;
    result.tipo = data.tipo.S;
    result.items = data.items.SS;

    return result;
  }
}
