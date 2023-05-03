-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "open" BOOLEAN DEFAULT false,
    "score" DOUBLE PRECISION,
    "mainImageUrl" TEXT,
    "rgbBackgroundId" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RgbBackground" (
    "id" TEXT NOT NULL,
    "r" INTEGER NOT NULL,
    "g" INTEGER NOT NULL,
    "b" INTEGER NOT NULL,
    "a" DOUBLE PRECISION,

    CONSTRAINT "RgbBackground_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Location_rgbBackgroundId_key" ON "Location"("rgbBackgroundId");

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_rgbBackgroundId_fkey" FOREIGN KEY ("rgbBackgroundId") REFERENCES "RgbBackground"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
