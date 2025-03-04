module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure it includes all HTML files
  theme: {
    extend: {
      colors: {
        mylightbrown: "#f5ede0", // Custom color
        mydarkbrown: "#534F48", // Custom color
      },
      fontFamily: {
        exo2: ["Exo 2", "sans-serif"],
        grapenuts: ["Grape Nuts", "cursive"],
        firacode: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
