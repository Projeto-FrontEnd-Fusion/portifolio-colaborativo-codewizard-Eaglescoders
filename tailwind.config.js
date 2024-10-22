/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        zen: ["Zen Dots", "sans-serif"],
        inconsolata: ["Inconsolata", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      textColor: {
        gray: ["#B5B3BC", "#ebebeb", "#e1e1e1"],
        nameMember: ["#03FCFC"]
      },
      colors: {
        purple: {
          1: "#0f0920",
          2: "#221c3e",
          3: "#f2f0ff",
        },
        gray: {
          1: "#b5b3bc",
          2: "#ebebeb",
          3: "#e1e1e1",
          4: "#767676",
          5: "#454343",
          6: "#CCCCCC"
        },
        white: {
          1: "#ffffff",
          2: "#F1F1F1",
        },
        black: {
          1: "#000000",
        },
        blue: {
          1: "#0368ff",
          2: "#0A1045",
        },
        yellow: {
          1: "#ffb800",
        },
        green: {
          1: "#16c586",
          2: "#0a4c65",
          3: "#06B94E",
        },

      },
      lineHeight: {
        "desktop-mini": "1rem",
        "desktop-small": "1.255rem",
        "desktop-medium": "1.412rem",
        "desktop-larger": "1.625rem",
        "desktop-extraLarger": "1.726rem",
        "desktop-ultra": "2.098rem",
        "desktop-hiper": "2.196rem",
        "desktop-mega": "2.51rem",

        "mobile-mini": "1rem",
        "mobile-small": "1.098rem",
        "mobile-medium": "1.125rem",
        "mobile-larger": "1.255rem",
        "mobile-extraLarger": "1.375rem",
        "mobile-ultra": "1.443rem",
        "mobile-hiper": "2.196rem",
      },
      zIndex: {
        '0': 0,
        '1': 10,
        '2': 20,
        '3': 30,
        '4': 40,
        '5': 50,
      },
      rightLane: {
        '0': 160,
        '1': 128,
        '2': 96,
        '3': 64,
        '4': 32,
        '5': 0,
      },
      marginRight: {
        '0': 105,
        '1': 85,
        '2': 65,
        '3': 45,
        '4': 25,
        '5': 5,
      },
      fontSize: {
        sizeParagraph: ["24px"],
        sizeParagraphSm: ["18px"],
        sizeTitle: ["38px"],
        sizeTitleSm: ["32px"],

        "desktop-mini": "0.75rem",
        "desktop-extraMini": "0.938rem",
        "desktop-small": "1rem",
        "desktop-extraSmall": "1.125rem",
        "desktop-medium": "1.25rem",
        "desktop-extraMedium": "1.375rem",
        "desktop-larger": "1.5rem",
        "desktop-extraLarger": "1.75rem",
        "desktop-ultra": "1.938rem",
        "desktop-extraUltra": "2rem",
        "desktop-hiper": "2.25rem",
        "desktop-extraHiper": "2.375rem",
        "desktop-mega": "3rem",

        "mobile-mini": "0.5rem",
        "mobile-extraMini": "0.75rem",
        "mobile-small": "0.875rem",
        "mobile-medium": "1rem",
        "mobile-larger": "1.125rem",
        "mobile-extraLarger": "1.25rem",
        "mobile-hiper": "1.375rem",
        "mobile-extraHiper": "1.75rem",
        "mobile-mega": "2.375rem",
      },
      width: {
        mini: "13.5rem",
        extraMini: "18.625rem",
        small: "19.813rem",
        extraSmall: "20.313rem",
        medium: "24.25rem",
        extraMedium: "24.75rem",
        larger: "28.688rem",
        extraLarger: "29.688rem",
        hiper: "31.688rem",
        mega: "32.063rem",
      },
      maxWidth: {
        min: "18.438rem",
        small: "24.75rem",
        medium: "51.625rem",
        extraMedium: "74.75rem",
        larger: "75.75rem",
        extralarger: "51.5rem",
        hiper: "78.25rem",
      },
      height: {
        mini: "8.25rem",
        extraMini: "11.125rem",
        small: "11.375rem",
        extraSmall: "11.75rem",
        medium: "3.063rem",
        extraMedium: "5.063rem",
        larger: "18.125rem",
        extraLarger: "21.313rem",
      },
      screens: {
        xs: ["360px"],
        md: "826px",
        lg: "1212px",
        extraLg: "1260px",
      },
      dropShadow: {
        customized: "6px 10px 20px rgba(0, 0, 0, 0.2)",
      },
      gap: {
        small: "1.063rem",
        medium: "4.125rem",
      },
      spacing: {
        pNegativo: {
          as: "-15px",
        },
      },
      margin: {
        miniNegativo: "-15px",
      },
      boxShadow:{
        cardShadow: "0px 0px 10px 3px rgba(0,0,0,0.25)"
      },
    },
  },
  plugins: [],
};
