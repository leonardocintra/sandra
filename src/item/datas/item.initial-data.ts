import { Item } from "../entities/item.entity";

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