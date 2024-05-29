/*
  Warnings:

  - You are about to alter the column `descricao` on the `Restaurante` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(80)`.

*/
-- AlterTable
ALTER TABLE "Restaurante" ALTER COLUMN "descricao" SET DATA TYPE VARCHAR(80);

-- CreateTable
CREATE TABLE "TipoItem" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(60) NOT NULL,
    "restauranteId" INTEGER NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "TipoItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TipoItem" ADD CONSTRAINT "TipoItem_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "Restaurante"("id") ON DELETE CASCADE ON UPDATE CASCADE;
