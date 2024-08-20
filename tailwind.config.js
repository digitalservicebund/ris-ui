/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,vue,js,ts}"],

  presets: [require("@digitalservice4germany/style-dictionary/tailwind")],

  plugins: [require("@digitalservice4germany/angie")],

  theme: {
    extend: {},
  },
};
