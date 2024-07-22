// const API_KEY = "505d4170-67b8-4e81-ae71-4db336519b7c" CoinCup API ;
 import axios from "axios";

 const API_URL = "https://api.coingecko.com/api/v3/coins/markets";

 export async function fetchAssets() {
   try {
     const response = await axios.get(API_URL, {
       params: {
         vs_currency: "usd",
         order: "market_cap_desc",
         per_page: 100,
         page: 1,
         sparkline: false,
       },
     });

     if (response.status !== 200) {
       throw new Error(`HTTP error! status: ${response.status}`);
     }

     return response.data;
   } catch (error) {
     console.error("Error fetching assets:", error.message);
     return [];
   }
 }
