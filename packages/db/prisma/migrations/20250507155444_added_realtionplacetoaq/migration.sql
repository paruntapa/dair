-- DropForeignKey
ALTER TABLE "AirQuality" DROP CONSTRAINT "AirQuality_placeId_fkey";

-- AlterTable
ALTER TABLE "Place" ADD COLUMN     "airQualityId" TEXT;

-- AddForeignKey
ALTER TABLE "Place" ADD CONSTRAINT "Place_airQualityId_fkey" FOREIGN KEY ("airQualityId") REFERENCES "AirQuality"("id") ON DELETE SET NULL ON UPDATE CASCADE;
