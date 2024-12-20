-- AlterTable
ALTER TABLE "RelatorioConversaWhatsApp" ADD COLUMN     "audioDuration" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "audioMimetype" VARCHAR(20) NOT NULL DEFAULT 'text',
ADD COLUMN     "isGroup" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "messageType" VARCHAR(10) NOT NULL DEFAULT 'text',
ADD COLUMN     "ownerPhone" VARCHAR(20);
