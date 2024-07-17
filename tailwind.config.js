/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(97.53deg, #F687B3 5.6%, #7B61FF 59.16%, #16D1A1 119.34%)",
      },
    },
  },
  plugins: [],
};
