-- CreateTable
CREATE TABLE "Restaurante" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Restaurante_pkey" PRIMARY KEY ("id")
);
