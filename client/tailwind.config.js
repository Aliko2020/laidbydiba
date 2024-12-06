module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Pacifico": ["Pacifico", 'cursive'],
        "Roboto": ["Roboto", 'sans-serif'],
        "test": ["Delius", "cursive"]
    },
    colors: {
      "Primary": "#f3bdc6",
      "Links": "#6950F3",
      "Complemetary": "#211b1a",
      "Soft": "#DBC1AD"
      
    }
    },
  },
  plugins: [],
};
