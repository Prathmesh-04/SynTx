-- AlterTable
ALTER TABLE "Submission" ADD COLUMN     "compile_output" TEXT,
ADD COLUMN     "memory" TEXT,
ADD COLUMN     "message" TEXT,
ADD COLUMN     "time" TEXT,
ALTER COLUMN "output" SET DATA TYPE TEXT;
