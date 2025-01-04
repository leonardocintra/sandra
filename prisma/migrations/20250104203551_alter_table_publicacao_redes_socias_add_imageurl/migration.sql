/*
  Warnings:

  - Added the required column `imageUrl` to the `PublicacoesRedesSociais` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PublicacoesRedesSociais" ADD COLUMN     "imageUrl" VARCHAR(200) NOT NULL;
