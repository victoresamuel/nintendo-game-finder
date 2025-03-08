-- CreateTable
CREATE TABLE "rooms" (
    "id" SERIAL NOT NULL,
    "imageUrl" VARCHAR(255) NOT NULL,
    "game" VARCHAR(255) NOT NULL,
    "turns" VARCHAR(255) NOT NULL,
    "bonusStars" TEXT NOT NULL,
    "minigameHelp" TEXT NOT NULL,
    "minigameType" VARCHAR NOT NULL,
    "board" VARCHAR(255) NOT NULL,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
