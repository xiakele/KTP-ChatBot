import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: globals.node },
  },
  tseslint.configs.recommended,
  eslintPluginUnicorn.configs.recommended,
  {
    rules: {
      "unicorn/filename-case": [
        "error",
        {
          case: "camelCase",
        },
      ],
    },
  },
  eslintConfigPrettier,
]);
