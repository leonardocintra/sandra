-- CreateTable
CREATE TABLE "TipoMarmitex" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(40) NOT NULL,
    "restauranteId" INTEGER NOT NULL,

    CONSTRAINT "TipoMarmitex_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TipoMarmitex_restauranteId_descricao_key" ON "TipoMarmitex"("restauranteId", "descricao");

-- AddForeignKey
ALTER TABLE "TipoMarmitex" ADD CONSTRAINT "TipoMarmitex_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "Restaurante"("id") ON DELETE CASCADE ON UPDATE CASCADE;
