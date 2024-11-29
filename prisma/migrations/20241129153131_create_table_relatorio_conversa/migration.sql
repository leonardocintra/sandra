-- CreateTable
CREATE TABLE "RelatorioConversaWhatsApp" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "sendBy" VARCHAR(10) NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "RelatorioConversaWhatsApp_pkey" PRIMARY KEY ("id")
);
