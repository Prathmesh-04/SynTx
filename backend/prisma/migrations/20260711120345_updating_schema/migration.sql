/*
  Warnings:

  - The primary key for the `Submission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `code` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the column `submissionId` on the `Submission` table. All the data in the column will be lost.
  - Added the required column `sourceCode` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `Submission` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('processing', 'Accepted', 'Failed');

-- AlterTable
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_pkey",
DROP COLUMN "code",
DROP COLUMN "submissionId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "output" TEXT,
ADD COLUMN     "sourceCode" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "SubmissionStatus" NOT NULL,
ADD CONSTRAINT "Submission_pkey" PRIMARY KEY ("id");
