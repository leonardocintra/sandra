-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(60) NOT NULL,
    "tipoItemId" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_tipoItemId_fkey" FOREIGN KEY ("tipoItemId") REFERENCES "TipoItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
