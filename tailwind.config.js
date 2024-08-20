import { RisUiPlugin, RisUiPreset } from "./src/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,vue,js,ts}"],

  presets: [RisUiPreset],

  plugins: [RisUiPlugin],
};
