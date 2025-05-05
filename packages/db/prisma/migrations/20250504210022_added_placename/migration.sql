/*
  Warnings:

  - You are about to drop the column `location` on the `Place` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Place` table. All the data in the column will be lost.
  - Added the required column `placeName` to the `Place` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Place" DROP COLUMN "location",
DROP COLUMN "name",
ADD COLUMN     "placeName" TEXT NOT NULL;
