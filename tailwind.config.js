/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      maxWidth: {
        container: "1170px",
      },
      colors: {
        main: "#FF4C60",
        hash: "#838383",
        secondary: "#e8e8e8",
      },
      screens: {
        'iphone': '370px',
        'iphone_tab': '770px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #101010, #101010, #101010)',
      },
    },
  },
  plugins: [],
};
