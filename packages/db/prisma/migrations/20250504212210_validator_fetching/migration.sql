/*
  Warnings:

  - You are about to drop the column `validatorId` on the `AirQuality` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AirQuality" DROP CONSTRAINT "AirQuality_validatorId_fkey";

-- AlterTable
ALTER TABLE "AirQuality" DROP COLUMN "validatorId";

-- AlterTable
ALTER TABLE "Place" ADD COLUMN     "validatedByWallet" TEXT,
ADD COLUMN     "validatorFetching" BOOLEAN NOT NULL DEFAULT false;
