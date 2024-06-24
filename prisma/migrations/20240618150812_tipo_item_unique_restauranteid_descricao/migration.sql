/*
  Warnings:

  - A unique constraint covering the columns `[restauranteId,descricao]` on the table `TipoItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TipoItem_restauranteId_descricao_key" ON "TipoItem"("restauranteId", "descricao");
