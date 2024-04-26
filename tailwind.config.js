/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "colors-white": "#fff",
        "colors-black": "#000",
        "colors-text": "#44444b",
        "colors-text-hover": "#525252",
        "colors-text-contrast": "#FCFCFD",
        "colors-text-secondary": "#8D8C97",
        "colors-text-tertiary": "#5D5C70",
        "colors-primary": "#6F58FF",
        "colors-bg": "#FCFCFD",
        "colors-bg-hover": "#f2f2f2",
        "colors-bg-secondary": "#F7F7F8",
        "colors-border-secondary-hover": "#e6e6e6",
        "colors-border": "#F7F7F8",
        "colors-border-secondary": "#E4E4E7"
      },
      spacing: {      
        "115.5": "28.875rem",
        "112": "28rem",
        "128": "32rem",
        "150": "37.5rem"
      },
      boxShadow: {
        "card": "0px 0.32px 0.32px 0px #0000000D,0px 0.64px 0.64px 0px #0000000D,0px 1.28px 1.28px 0px #0000000D,0px 2.55px 2.55px 0px #0000000D,0px 5.1px 5.1px 0px #0000000D,0px 10.2px 10.2px 0px #0000000D,0px 20.4px 20.4px 0px #0000000D"
      },
      screens: {
        "2xs": "0px",
        "xs": "375px",
        "2xl": "1366px",
        "3xl": "1440px",
        "4xl": "1536px",
        "5xl": "1920px",
      },  
    },
  },
}

