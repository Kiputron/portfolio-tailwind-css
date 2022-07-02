module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "14px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
    },
    screen: {
      "2xl": "1320x",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
