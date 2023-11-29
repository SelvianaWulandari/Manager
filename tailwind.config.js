module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        red: { 900: "#b51a1a" },
        gray: { 900: "#001434" },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_01": "#01071d",
          "900_03": "#070707",
          "900_02": "#0c0c0c",
        },
        green: { 600: "#419e4b", A700: "#01d35b" },
        indigo: { 300: "#7180d0", 800: "#273683" },
        white: { A700_00: "#ffffff00", A700: "#ffffff" },
        amber: { A700: "#ffad03" },
        blue: { 300: "#53b1e6" },
        blue_gray: { 700: "#55586c" },
      },
      fontFamily: {
        alata: "Alata",
        inter: "Inter",
        justanotherhand: "Just Another Hand",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#7180d0,#ffffff00)",
      },
      boxShadow: {
        bs1: "0px 4px  4px 0px #0000003f",
        bs: "10px 11px  20px 0px #0000003f",
      },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
