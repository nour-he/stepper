/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        11: "11px",
        11.5: "11.5px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        20: "20px",
        22: "22px",
        23: "23px",
        24: "24px",
        25: "25px",
        26: "26px",
        27: "27px",
        28: "28px",
        30: "30px",
        31: "31px",
        32: "32px",
        35: "35px",
        36: "36px",
        38: "38px",
        40: "40px",
        43: "43px",
        48: "48px",
        58: "58px",
      },
      colors: {
        gray_1: "#28282A",
        gray_2: "#202022",
        gray_0: "#484848",
        light_gray: "#A5A5A5",
        twhite: "#707070",
        gray_3: "#828282",
        gray_: "#464646",
        gray_4: "#2E2E2E",
        gray_5: "#BFBFBF",
        blue_1: "#3621B6",
        blue_2: "#725AFF",
        blue_3: "#038CE5",
        blue_4: "#4262D8",
        skyBlue: "#5C7FFF",
        blueberry: "#382CDD",
        cinnabar: "#F24933",
        vermilion: "#F94933",
        coral: "#F9644B",
        dark_gray: "#434343",
        lightgray: "#47474744",
        melon: "#FA9588",
      },
      screens: {
        xs: "393px",
      },
      fontFamily: {
        "clash-semi": "clashdisplay-semibold",
        "clash-bold": "clash_display_variablebold",
        "int-regular": "interregular",
        "inter-Bold": "interBold",
        "int-semiBold": "interSemiBold",
        "inter-Light": "interLight",
        "out-thin": "outfitthin",
        "clash-regular": "clashdisplay-regular",
        "clash-medium": "clashdisplay-medium",
        "inter-medium": "intermedium",
      },
      rotate: {
        20: "20deg",
        17: "17deg",
      },
    },
  },
  plugins: [],
};
