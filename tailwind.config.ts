import { nextui } from "@nextui-org/react";

import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "gotham-book": ["Gotham Book", "sans-serif"],
        "gotham-bold": ["Gotham Bold", "sans-serif"],
        "gotham-book-italic": ["Gotham Book Italic", "sans-serif"],
        "gotham-bold-italic": ["Gotham Bold Italic", "sans-serif"],
        "ipa-gothic": ["IPA Gothic", "sans-serif"],
      },
    },
    fontFamily: {
      "sans": ["Gotham Book"],
    }
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
