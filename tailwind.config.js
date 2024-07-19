/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,vue,js,ts}",
        "./app.vue",
        "./src/components/customPreset.ts"
    ],
    presets: [require("@digitalservice4germany/style-dictionary/tailwind")],
    plugins: [
        require('tailwindcss-primeui'),
        require("@digitalservice4germany/angie")
    ],
    theme: {
        extend: {},
    },
}