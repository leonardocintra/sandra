import { CreateConfiguracaoDto } from "../dto/create-configuracao.dto";

export class ConfiguracaoMarmitex {
  restaurante: string;
  tipoMarmitex: string;
  maxSaladas: number;
  maxCarnes: number;
  maxGuarnicoes: number;
  preco: number;

  static newInstanceFromDynamoDB(data: any): ConfiguracaoMarmitex {
    const result = new ConfiguracaoMarmitex();

    result.restaurante = data.restaurante.S;
    result.tipoMarmitex = data.tipoMarmitex.S;
    result.maxSaladas = Number(data.maxSaladas.N);
    result.maxCarnes = Number(data.maxCarnes.N);
    result.maxGuarnicoes = Number(data.maxGuarnicoes.N);
    result.preco = Number(data.preco.N);

    return result;
  }

  static newInstanceFromDto(data: CreateConfiguracaoDto): ConfiguracaoMarmitex {
    const result = new ConfiguracaoMarmitex();

    result.restaurante = data.restaurante;
    result.maxCarnes = data.maxCarnes;
    result.maxGuarnicoes = data.maxGuarnicoes;
    result.maxSaladas = data.maxSaladas;
    result.preco = data.preco;
    result.tipoMarmitex = data.tipoMarmitex;

    return result;
  }

}
