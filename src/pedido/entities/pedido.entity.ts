export class Pedido {
  restaurante: string;
  pedidoId: string;
  dataPedido: string;
  nome: string;
  telefone: string;
  items: string[];

  static newInstanceFromDynamoDB(data: any): Pedido {
    const result = new Pedido();

    result.restaurante = data.restaurante.S;
    result.pedidoId = data.pedidoId.S;
    result.dataPedido = data.dataPedido.S;
    result.nome = data.nome.S;
    result.telefone = data.telefone.S;
    result.items = data.items.SS;

    return result;
  }
}
