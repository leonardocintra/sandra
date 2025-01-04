-- AlterTable
ALTER TABLE "PublicacoesRedesSociais" ADD COLUMN     "imageUrl" VARCHAR(200),
ADD COLUMN     "useImage" BOOLEAN NOT NULL DEFAULT false;
