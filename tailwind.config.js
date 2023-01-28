/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // screens: {
      //   lgExtra: { min: "1118px" },
      //   ...defaultTheme.screens
      // },
      colors: {
        background: "#11172B",
        backgroundLight: "#1B2138",
        primary: "#0EE7B7",
        secondary: "#7AC7E3",
        gradient: "linear-gradient(225deg, #313860 0%, #11172B 100%);",
        text: "#848DA0",
        textHighlight: "#444B5B",
        textLight: "#C4C4C4",
        border: "#313958",
        inputBackground: "#1E253E",
        ...defaultTheme.colors
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        jetBrains: ["JetBrains Mono", "monospace"]
      },
      animation: {
        rightIn: "rightIn .5s",
        leftIn: "leftIn .6s",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1)"
      },
      keyframes: {
        rightIn: {
          from: {
            right: "-333px"
          },
          to: {
            right: "0px"
          }
        },
        leftIn: {
          from: {
            left: "-333px"
          },
          to: {
            left: "0px"
          }
        }
      }
    }
  },
  plugins: []
}

