/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      phone: { min: "200px", max: "500px" },
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        customRed: "#e60012",
        customBlue: "#0b2b6b",
        lightBlue: "#d6f0fa",
        customGray: "#efefef",
        customWhite: "#ffffff",
        darkGray: "#434242",
      },
    },
  },
  plugins: [],
};
