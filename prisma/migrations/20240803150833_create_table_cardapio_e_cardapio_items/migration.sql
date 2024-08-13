-- CreateTable
CREATE TABLE "Cardapio" (
    "id" SERIAL NOT NULL,
    "restauranteId" INTEGER NOT NULL,
    "dataValidade" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cardapio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardapioItens" (
    "id" SERIAL NOT NULL,
    "cardapioId" INTEGER NOT NULL,

    CONSTRAINT "CardapioItens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cardapio" ADD CONSTRAINT "Cardapio_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "Restaurante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardapioItens" ADD CONSTRAINT "CardapioItens_cardapioId_fkey" FOREIGN KEY ("cardapioId") REFERENCES "Cardapio"("id") ON DELETE CASCADE ON UPDATE CASCADE;
