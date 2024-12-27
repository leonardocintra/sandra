-- CreateTable
CREATE TABLE "PublicacoesRedesSociais" (
    "id" SERIAL NOT NULL,
    "user" VARCHAR(50) NOT NULL DEFAULT 'leonardoncintra',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,
    "twitter" BOOLEAN NOT NULL DEFAULT false,
    "thread" BOOLEAN NOT NULL DEFAULT false,
    "instagram" BOOLEAN NOT NULL DEFAULT false,
    "youtube" BOOLEAN NOT NULL DEFAULT false,
    "whastapp" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PublicacoesRedesSociais_pkey" PRIMARY KEY ("id")
);
