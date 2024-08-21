import { includeIgnoreFile } from "@eslint/compat";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import { fileURLToPath, URL } from "node:url";
import tseslint from "typescript-eslint";

export default [
  // Files
  includeIgnoreFile(fileURLToPath(new URL(".gitignore", import.meta.url))),
  { files: ["**/*.{js,ts}"] },

  // Language options
  { languageOptions: { globals: globals.browser } },

  // Configs
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];
