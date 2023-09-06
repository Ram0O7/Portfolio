/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /****** Colors for Classic Monochrome Theme ******/

        /* Background Color */
        "monochrome-bg": "#f4f4f4",
        /* Text Color */
        "monochrome-txt": "#333",
        /* Accent Color for Links and Highlights */
        "monochrome-accent": "#007bff",
        /* Secondary Accent Color */
        "monochrome-secondary-accent": "#6c757d",
        /* Button Background Color */
        "monochrome-btn": "#007bff",

        /****** Colors for Vibrant and Energetic Theme ******/

        /* Background Color */
        "energetic-bg": "#f7f7f7",
        /* Text Color */
        "energetic-txt": "#333",
        /* Primary Accent Color */
        "energetic-accent": "#ff5733",
        /* Secondary Accent Color */
        "energetic-secondary-accent-color": "#44bb44",
        /* Button Background Color */
        "energetic-btn": "#ff5733",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
