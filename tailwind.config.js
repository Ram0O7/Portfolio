/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    //text colors
    "text-monochrome-txt",
    "text-elegent-txt",
    "text-furiastic-txt",
    "text-nature-txt",
    "text-energetic-txt",
    //text colors with opacity 60
    "text-monochrome-txt/70",
    "text-elegent-txt/70",
    "text-furiastic-txt/70",
    "text-nature-txt/70",
    "text-energetic-txt/70",
    //border colors
    "border-monochrome-txt",
    "border-elegent-txt",
    "border-furiastic-txt",
    "border-nature-txt",
    "border-energetic-txt",
    //hover text accent color
    "hover:text-monochrome-accent",
    "hover:text-elegent-accent",
    "hover:text-furiastic-accent",
    "hover:text-nature-accent",
    "hover:text-energetic-accent",
    //text bg colors
    "text-monochrome-bg",
    "text-elegent-bg",
    "text-furiastic-bg",
    "text-nature-bg",
    "text-energetic-bg",
    //bg colors
    "bg-monochrome-bg",
    "bg-elegent-bg",
    "bg-furiastic-bg",
    "bg-nature-bg",
    "bg-energetic-bg",
    //bg colors with opacity 80
    "bg-monochrome-bg/60",
    "bg-elegent-bg/60",
    "bg-furiastic-bg/60",
    "bg-nature-bg/60",
    "bg-energetic-bg/60",
    //bg-accent-colors
    "bg-monochrome-accent",
    "bg-elegent-accent",
    "bg-furiastic-accent",
    "bg-nature-accent",
    "bg-energetic-accent",
    //bg-accent-colors on hover
    "hover:bg-monochrome-accent",
    "hover:bg-elegent-accent",
    "hover:bg-furiastic-accent",
    "hover:bg-nature-accent",
    "hover:bg-energetic-accent",
    //text-accent-colors
    "text-monochrome-accent",
    "text-elegent-accent",
    "text-furiastic-accent",
    "text-nature-accent",
    "text-energetic-accent",
    //text secondary accent colors
    "text-monochrome-secondary-accent",
    "text-elegent-secondary-accent",
    "text-furiastic-secondary-accent",
    "text-nature-secondary-accent",
    "text-energetic-secondary-accent",
    //bg secondary accent colors
    "bg-monochrome-secondary-accent",
    "bg-elegent-secondary-accent",
    "bg-furiastic-secondary-accent",
    "bg-nature-secondary-accent",
    "bg-energetic-secondary-accent",
    //bg secondary accent colors on hover
    "hover:bg-monochrome-secondary-accent",
    "hover:bg-elegent-secondary-accent",
    "hover:bg-furiastic-secondary-accent",
    "hover:bg-nature-secondary-accent",
    "hover:bg-energetic-secondary-accent",
    //bg after background colors
    "after:bg-monochrome-bg",
    "after:bg-elegent-bg",
    "after:bg-furiastic-bg",
    "after:bg-nature-bg",
    "after:bg-energetic-bg",
    //bg after secondary accent colors
    "after:bg-monochrome-secondary-accent",
    "after:bg-elegent-secondary-accent",
    "after:bg-furiastic-secondary-accent",
    "after:bg-nature-secondary-accent",
    "after:bg-energetic-secondary-accent",
    //btn background colors
    "bg-monochrome-btn",
    "bg-elegent-btn",
    "bg-furiastic-btn",
    "bg-energetic-btn",
    "bg-nature-btn",
    //offset decoration colors
    "decoration-monochrome-accent",
    "decoration-elegent-accent",
    "decoration-furiastic-accent",
    "decoration-nature-accent",
    "decoration-energetic-accent",
    //gradient colors
    "from-monochrome-accent to-monochrome-secondary-accent",
    "from-elegent-accent to-elegent-secondary-accent",
    "from-furiastic-accent to-furiastic-secondary-accent",
    "from-nature-accent to-nature-secondary-accent",
    "from-energetic-accent to-energetic-secondary-accent",
    //gradient colors for before
    "before:from-monochrome-accent before:to-monochrome-secondary-accent",
    "before:from-elegent-accent before:to-elegent-secondary-accent",
    "before:from-furiastic-accent before:to-furiastic-secondary-accent",
    "before:from-nature-accent before:to-nature-secondary-accent",
    "before:from-energetic-accent before:to-energetic-secondary-accent",
    //classes for blog page
    "prose-invert",
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
        "energetic-secondary-accent": "#44bb44",
        /* Button Background Color */
        "energetic-btn": "#ff5733",

        /****** Colors for Nature-Inspired Theme ******/

        /* Background Color */
        "nature-bg": "#e4f9f5",
        /* Text Color */
        "nature-txt": "#333",
        /* Green Accent Color */
        "nature-accent": "#44bb44",
        /* Brown Accent Color */
        "nature-secondary-accent": "#8b4513",
        /* Button Background Color */
        "nature-btn": "#44bb44",

        /****** Colors for Futuristic tech Theme ******/

        /* Background Color */
        "furiastic-bg": "#0f0f0f",
        /* Text Color */
        "furiastic-txt": "#ccc",
        /* Neon Accent Color */
        "furiastic-accent": "#00ffcc",
        /* Dark Blue Accent Color */
        "furiastic-secondary-accent": "#0033cc",
        /* Button Background Color */
        "furiastic-btn": "#00ffcc",

        /****** Colors for Elegant Dark Mode Theme ******/

        /* Background Color */
        "elegent-bg": "#111",
        /* Text Color */
        "elegent-txt": "#ddd",
        /* Accent Color for Links and Highlights */
        "elegent-accent": "#ffcc00",
        /* Secondary Accent Color */
        "elegent-secondary-accent": "#777",
        /* Button Background Color */
        "elegent-btn": "#ffcc00",
        //paper color for profile container
        paper: "#f4f0e8",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
