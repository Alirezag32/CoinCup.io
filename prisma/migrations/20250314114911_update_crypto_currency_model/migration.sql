-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cryptoCurrency" (
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
    "max_supply" REAL,
    "ath" REAL NOT NULL,
    "ath_change_percentage" REAL NOT NULL,
    "ath_date" DATETIME NOT NULL,
    "atl" REAL NOT NULL,
    "atl_change_percentage" REAL NOT NULL,
    "atl_date" DATETIME NOT NULL,
    "roi" REAL,
    "last_updated" DATETIME NOT NULL
);
INSERT INTO "new_cryptoCurrency" ("ath", "ath_change_percentage", "ath_date", "atl", "atl_change_percentage", "atl_date", "circulating_supply", "current_price", "fully_diluted_valuation", "high_24h", "id", "image", "last_updated", "low_24h", "market_cap", "market_cap_change_24h", "market_cap_change_percentage_24h", "market_cap_rank", "max_supply", "name", "price_change_24h", "price_change_percentage_24h", "roi", "symbol", "total_supply", "total_volume") SELECT "ath", "ath_change_percentage", "ath_date", "atl", "atl_change_percentage", "atl_date", "circulating_supply", "current_price", "fully_diluted_valuation", "high_24h", "id", "image", "last_updated", "low_24h", "market_cap", "market_cap_change_24h", "market_cap_change_percentage_24h", "market_cap_rank", "max_supply", "name", "price_change_24h", "price_change_percentage_24h", "roi", "symbol", "total_supply", "total_volume" FROM "cryptoCurrency";
DROP TABLE "cryptoCurrency";
ALTER TABLE "new_cryptoCurrency" RENAME TO "cryptoCurrency";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
