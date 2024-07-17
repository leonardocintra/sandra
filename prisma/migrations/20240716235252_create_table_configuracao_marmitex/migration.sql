-- CreateTable
CREATE TABLE "ConfiguracaoMarmitex" (
    "id" SERIAL NOT NULL,
    "tipoMarmitexId" INTEGER NOT NULL,
    "tipoItemId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "ConfiguracaoMarmitex_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ConfiguracaoMarmitex_tipoMarmitexId_tipoItemId_key" ON "ConfiguracaoMarmitex"("tipoMarmitexId", "tipoItemId");

-- AddForeignKey
ALTER TABLE "ConfiguracaoMarmitex" ADD CONSTRAINT "ConfiguracaoMarmitex_tipoMarmitexId_fkey" FOREIGN KEY ("tipoMarmitexId") REFERENCES "TipoMarmitex"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConfiguracaoMarmitex" ADD CONSTRAINT "ConfiguracaoMarmitex_tipoItemId_fkey" FOREIGN KEY ("tipoItemId") REFERENCES "TipoItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
