/** @type {import('tailwindcss').Config} */
import {
  black,
  white,
  gray,
  emerald,
  indigo,
  yellow,
  green,
} from "tailwindcss/colors"

export const content = ["./src/**/*.tsx", "./src/**/*.css"]
export const theme = {
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black,
    white,
    gray,
    emerald,
    indigo,
    yellow,
    green,
  },
}
export const plugins = [require("@tailwindcss/forms")]
