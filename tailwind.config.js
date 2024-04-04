/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {},
      backgroundImage: {},
      colors: {},
      fontFamily: {
        poppins: ["Poppins"],
      },
      borderRadius: {
        r10px: "10px",
      },
    },
  },
  plugins: [],
};
