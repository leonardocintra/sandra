import { ConfiguracaoMarmitex } from "src/marmitex/configuracao/entities/configuracao.entity";
import { Item } from "../item/entities/item.entity";

export function obterDadosConfiguracaoMarmitexIniciais(restaurante: string): Array<ConfiguracaoMarmitex> {
  return [
    {
      restaurante,
      tipoMarmitex: "Grande",
      maxCarnes: 3,
      maxGuarnicoes: 3,
      maxSaladas: 2,
      preco: 49.9
    },
    {
      restaurante,
      tipoMarmitex: "Médio",
      maxCarnes: 2,
      maxGuarnicoes: 3,
      maxSaladas: 1,
      preco: 39.9
    },
    {
      restaurante,
      tipoMarmitex: "Pequeno",
      maxCarnes: 1,
      maxGuarnicoes: 2,
      maxSaladas: 1,
      preco: 29.9
    }
  ]
}

export function obterDadosItemIniciais(restaurante: string): Array<Item> {
  return [
    {
      restaurante,
      items: [
        "Almôndega", "Bife acebolado", "Carne de panela", "Costelinha", "Cupim assado", "Frango assado", "Frango empanado", "Lagarto ao molho madeira", "Linguiça", "Lombo grelhado", "Strogonoff de frango"
      ],
      tipo: "carne"
    },
    {
      restaurante,
      items: [
        "Abobrinha batida", "Batata frita", "Berinjela empanada", "Canelone", "Chuchu", "Couve flor empanada", "Escondidinho calabresa", "Lasanha presunto e Mussarela", "Macarrão Alho e Oleo", "Macarrão ao molho sugo", "Mandioca frita", "Nhoque", "Repolho refogado"
      ],
      tipo: "guarnicao"
    },
    {
      restaurante,
      items: [
        "Alface", "Beterraba", "Maionese", "Pepino", "Tomate", "Vinagrete"
      ],
      tipo: "salada"
    },
  ]
}

export function obterDadosCardapioIniciais(restaurante: string): Array<Item> {
  return [
    {
      restaurante,
      items: [
        "Strogonoff de frango"
      ],
      tipo: "carne"
    },
    {
      restaurante,
      items: [
        "Batata frita"
      ],
      tipo: "guarnicao"
    },
    {
      restaurante,
      items: [
        "Vinagrete"
      ],
      tipo: "salada"
    },
  ]
}