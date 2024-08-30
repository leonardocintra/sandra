export class Configuracao {
  restaurante: string;
  tipoMarmitex: string;
  maxSaladas: number;
  maxCarnes: number;
  maxGuarnicoes: number;
  preco: number;

  static newInstanceFromDynamoDB(data: any): Configuracao {
    const result = new Configuracao();

    result.restaurante = data.restaurante.S;
    result.tipoMarmitex = data.tipoMarmitex.S;
    result.maxSaladas = Number(data.maxSaladas.N);
    result.maxCarnes = Number(data.maxCarnes.N);
    result.maxGuarnicoes = Number(data.maxGuarnicoes.N);
    result.preco = Number(data.preco.N);

    return result;
  }

}
