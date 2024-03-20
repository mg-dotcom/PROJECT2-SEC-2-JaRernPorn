// @type {import('tailwindcss').Config}
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-150": {
      transform: "rotateY(150deg)",
    },
    ".my-rotate-y-210": {
      transform: "rotateY(210deg)",
    },
    ".my-rotate-y-30": {
      transform: "rotateY(30deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "5200px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alkatra: ["Alkatra", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        NotoSansSC: ["Noto Sans SC", "sans-serif"],
      },
      colors: {
        title: "#B11717",
        "button-bgColor": "#861616",
        "main-bgColor": "#FDFFE8",
        white: "#FFFFFF",
        "quiz-bgColor": "#F4E4C0",
        black: "#20201D",
        "answer-fontColor": "#BE4400",
        brownColor: "#52250E",
        "gray-border": "#8A887C",
        greenTest: "#42d134",
        blueTest: "#186cc7",
      },
      fontSize: {
        "title-size": "118px",
        "compliment-size": "74px",
        "wrongPopup-size": "58px",
        "resultButton-size": "36px",
        "sm-title-size": "100px",
        "mobile-title-size": "80px",
        "sub-title-size": "14px",
      },
      lineHeight: {
        title: "1.10",
        list: "2.3",
        listMobile: "2",
      },
      padding: {
        title: "42px",
      },
      letterSpacing: {
        "sub-title": "2.8px",
        title: "2.8px",
        subtitle: "1.5px",
      },
      screens: {
        mobile: "320px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      width: {
        "catePage-20": "73px",
      },
    },
  },
  plugins: [require("daisyui"), Myclass],
};
