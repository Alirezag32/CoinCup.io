const API_URL = "https://api.coincap.io/v2/assets";
const API_KEY = "505d4170-67b8-4e81-ae71-4db336519b7c";

export async function fetchAssets() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer${API_KEY}`, 
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    

    const data = await response.json();
    
    return data.data;
  } catch (error) {
    console.error("Error fetching assets:", error.message);
    return [];
  }
}
