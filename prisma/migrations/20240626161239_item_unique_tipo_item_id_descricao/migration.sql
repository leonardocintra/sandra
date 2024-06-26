/*
  Warnings:

  - A unique constraint covering the columns `[tipoItemId,descricao]` on the table `Item` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Item_tipoItemId_descricao_key" ON "Item"("tipoItemId", "descricao");
