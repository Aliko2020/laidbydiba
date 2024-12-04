module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Pacifico": ["Pacifico", 'cursive'],
        "Roboto": ["Roboto", 'sans-serif']
    },
    colors: {
      "Primary": "#f3bdc6",
      "Complemetary": "#211b1a",
      "Soft": "#DBC1AD"
    }
    },
  },
  plugins: [],
};
