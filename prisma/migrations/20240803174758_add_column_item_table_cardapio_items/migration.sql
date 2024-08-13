/*
  Warnings:

  - A unique constraint covering the columns `[cardapioId,itemId]` on the table `CardapioItens` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `itemId` to the `CardapioItens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CardapioItens" ADD COLUMN     "itemId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CardapioItens_cardapioId_itemId_key" ON "CardapioItens"("cardapioId", "itemId");

-- AddForeignKey
ALTER TABLE "CardapioItens" ADD CONSTRAINT "CardapioItens_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
