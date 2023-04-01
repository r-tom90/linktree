/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      boxShadow: {
        secondary: "10px 10px 20px rgba(2, 2, 2, 0.25)",
      },
      textColor: {
        primary: "#aaa",
        secondary: "#fff",
      },
      backgroundColor: {
        light: "#eeeeee",
        primary: "#dddddd",
        secondary: "#cccccc",
        primaryLogo: "#030720",
        secondaryLogo: "#0097b2",
      },
      animation: {
        "spin-slow": "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
