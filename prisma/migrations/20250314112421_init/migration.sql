-- CreateTable
CREATE TABLE "CryptoCurrency" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rank" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "supply" TEXT NOT NULL,
    "maxSupply" TEXT NOT NULL,
    "marketCapUsd" TEXT NOT NULL,
    "volumeUsd24Hr" TEXT NOT NULL,
    "priceUsd" TEXT NOT NULL,
    "changePercent24Hr" TEXT NOT NULL,
    "vwap24Hr" TEXT NOT NULL,
    "explorer" TEXT NOT NULL
);
