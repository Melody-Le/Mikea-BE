CREATE TABLE "Users"(
    "id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "hash" TEXT NOT NULL,
    "address" TEXT NULL,
    "postalCode" INTEGER NULL,
    "role" BOOLEAN NOT NULL DEFAULT '0'
);
ALTER TABLE
    "Users" ADD PRIMARY KEY("id");
COMMENT
ON COLUMN
    "Users"."role" IS 'This is for development purpose, in current app, I will seed data';
CREATE TABLE "Carts"(
    "id" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL
);
ALTER TABLE
    "Carts" ADD PRIMARY KEY("id");
ALTER TABLE
    "Carts" ADD CONSTRAINT "carts_userid_foreign" FOREIGN KEY("userId") REFERENCES "Users"("id");