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
        "profile-img":
          "url('https://res.cloudinary.com/dn6bzdlno/image/upload/v1692613956/profile_qf2bmd.jpg')",
        "profile-img2":
          "url('https://res.cloudinary.com/dn6bzdlno/image/upload/v1692613956/profile_qf2bmd.jpg')",
      },
      colors: {
        "bg-primary": "#3fa7ca",
        "bg-secondary": "#f97068",
        "text-primary": "#c4c4c4",
        backdrop: "#212738a",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
