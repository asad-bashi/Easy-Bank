/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)",
        lightGray: "hsl(0, 0%, 98%)",
        lightGrayBlue: "hsl(220, 16%, 96%)",
      },
    },
  },
  plugins: [],
};
