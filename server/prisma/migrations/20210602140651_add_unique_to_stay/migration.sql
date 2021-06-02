/*
  Warnings:

  - A unique constraint covering the columns `[userId,countryId]` on the table `Stay` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Stay.userId_countryId_unique` ON `Stay`(`userId`, `countryId`);
