/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,tsx,ts,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#e5d3b5",
        "primary-300": "#69554b",
        "primary-500": "#6c371f",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#E7242D",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.webp')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/Evolve.webp')",
        abstractwaves: "url('./assets/AbstractWaves.webp')",
        sparkles: "url('./assets/Sparkles.webp')",
        circles: "url('./assets/Circles.webp')",
      },
    },
    screens: {
      xxs: [
        {"max": "520px"}
      ],
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
