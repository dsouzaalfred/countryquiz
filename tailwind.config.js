const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    colors: {
      primary: "#655D8A",
      secondary: "#7897AB",
      light: "#FDCEB9",
      wrong: "#D885A3",
      right: "#4ADE80",
      white: "#FFFFFF",
      black: "#000000",
      card: "#fff6f3",
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
