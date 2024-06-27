import daisyui from "daisyui";
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        default: "0 1px 3px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px rgba(55, 11, 0, 0.1)",
        red: "0 1px 3px rgba(255, 0, 0, 0.5)",  // لون ظل أحمر
        blue: "0 20px 25px rgba(0, 0, 255, 0.5),0 20px 35px 20px rgba(0, 0, 255, 0.5)", // لون ظل أزرق
        green: "0 1px 3px rgba(0, 255, 0, 0.5)" // لون ظل أخضر
      },
    },
  },
  plugins: [
    daisyui,
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-lg": {
          textShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-xl": {
          textShadow: "0 20px 25px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-red": {
          textShadow: "0 1px 3px rgba(255, 0, 0, 0.5)",
        },
        ".text-shadow-blue": {
          textShadow: "0 1px 3px rgba(0, 0, 255, 0.5)",
        },
        ".text-shadow-green": {
          textShadow: "0 1px 3px rgba(0, 255, 0, 0.5)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
  daisyui: {
    themes: ["dracula"],
  },
});