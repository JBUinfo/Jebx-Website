/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    colors: {
      black: "#111",
      white: "white",
      green: "#4dfe28",
      orange: "orange",
      blue: "#28feea",
      y2015: "#ffffff",
      y2017: "#b9d0e4",
      y2018: "#92c1ea",
      y2019: "#92eaea",
      y2020: "#92ea9f",
      y2021: "#eae492",
      y2022: "#ea9292",
      y2023: "#d792ea",
    },
    fontFamily: {
      pixl: ["pixl"],
      nk57i: ["nk57i"],
      "mirror-82-v2": ["mirror-82-v2"],
    },
    fontSize: {
      "2xs": "0.4rem",
      "1.5xs": "0.5rem",
      xs: "0.6rem",
      sm: "0.8rem",
      md: "0.9rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      keyframes: {
        "get-in": {
          "0%": { transform: "translateX(calc(200vw))" },
          "100%": { transform: "translateX(100vw)" },
        },
        "get-out": {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(calc(-100vw))" },
        },
        "leet-scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-300px)" },
        },
        "wait-and-show": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 24))" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(calc(-250px * 24))" },
          "100%": { transform: "translateX(0)" },
        },
        "scroll-left-sm": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-150px * 24))" },
        },
        "scroll-right-sm": {
          "0%": { transform: "translateX(calc(-150px * 24))" },
          "100%": { transform: "translateX(0)" },
        },
        "zoom-in": {
          "0%": { transform: "scale(0.7)" },
          "100%": { transform: "scale(1)" },
        },
        "zoom-out": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.7)" },
        },
        "zoom-logo": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        "get-in": "get-in 2s cubic-bezier(0.22, 0.61, 0.36, 1) forwards",
        "get-out": "get-out 2s cubic-bezier(0.76, 0.05, 0.86, 0.06) forwards",
        "leet-carrousel": "leet-scroll-left 25s linear infinite",
        "intro-description": "wait-and-show 3s 5s forwards",
        "scroll-left": "scroll-left 60s linear infinite",
        "scroll-right": "scroll-right 60s linear infinite",
        "scroll-left-sm": "scroll-left-sm 60s linear infinite",
        "scroll-right-sm": "scroll-right-sm 60s linear infinite",
        "zoom-in": "zoom-in 1s forwards",
        "zoom-out": "zoom-out 1s forwards",
        "zoom-logo": "zoom-logo 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};
