/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('/src/assets/bg-img.png')",
        rectangle: "url('/src/assets/rectangle.png')",
        tugma: "url('/src/assets/tugma/png')",
      },
    },
  },
  plugins: [],
};
