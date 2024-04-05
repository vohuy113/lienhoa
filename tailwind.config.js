/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#00B125",
      },
      backgroundImage: {},
      colors: {
        primary: "#00B125",
      },
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
