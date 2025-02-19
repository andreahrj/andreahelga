module.exports = {
  content: ["./*.html"], // Ensure it includes all HTML files
  theme: {
    extend: {
      colors: {
        mylightbrown: "#f5ede0", // Custom color
        mydarkbrown: "#534F48", // Custom color
      },
      fontFamily: {
        exo2: ["Exo 2", "sans-serif"],
        grapenuts: ["Grape Nuts", "cursive"], // Add the font
      },
    },
  },
  plugins: [],
};
