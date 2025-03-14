/*
  Warnings:

  - You are about to drop the `CryptoCurrency` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CryptoCurrency";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "cryptoCurrency" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "current_price" REAL NOT NULL,
    "market_cap" REAL NOT NULL,
    "market_cap_rank" INTEGER NOT NULL,
    "fully_diluted_valuation" REAL NOT NULL,
    "total_volume" REAL NOT NULL,
    "high_24h" REAL NOT NULL,
    "low_24h" REAL NOT NULL,
    "price_change_24h" REAL NOT NULL,
    "price_change_percentage_24h" REAL NOT NULL,
    "market_cap_change_24h" REAL NOT NULL,
    "market_cap_change_percentage_24h" REAL NOT NULL,
    "circulating_supply" REAL NOT NULL,
    "total_supply" REAL NOT NULL,
    "max_supply" REAL NOT NULL,
    "ath" REAL NOT NULL,
    "ath_change_percentage" REAL NOT NULL,
    "ath_date" DATETIME NOT NULL,
    "atl" REAL NOT NULL,
    "atl_change_percentage" REAL NOT NULL,
    "atl_date" DATETIME NOT NULL,
    "roi" REAL,
    "last_updated" DATETIME NOT NULL
);
