/*
  Warnings:

  - The values [CRITICAL] on the enum `AirStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AirStatus_new" AS ENUM ('GOOD', 'MODERATE', 'UNHEALTHY', 'VERY_UNHEALTHY', 'SEVERE');
ALTER TABLE "AirQuality" ALTER COLUMN "status" TYPE "AirStatus_new" USING ("status"::text::"AirStatus_new");
ALTER TYPE "AirStatus" RENAME TO "AirStatus_old";
ALTER TYPE "AirStatus_new" RENAME TO "AirStatus";
DROP TYPE "AirStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Validator" ADD COLUMN     "pendingPayouts" INTEGER NOT NULL DEFAULT 0;
