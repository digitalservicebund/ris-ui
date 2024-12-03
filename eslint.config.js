import { includeIgnoreFile } from "@eslint/compat";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import { fileURLToPath, URL } from "node:url";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [
  // Files
  includeIgnoreFile(fileURLToPath(new URL(".gitignore", import.meta.url))),
  { ignores: ["public/mockServiceWorker.js"] },
  { files: ["**/*.{js,ts,vue}"] },

  // Language options
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },

  // Configs
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  eslintConfigPrettier,
];
