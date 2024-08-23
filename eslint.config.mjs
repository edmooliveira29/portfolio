import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"

export default [
  { ignores: ["**/node_modules/**", "**/.next/**"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "max-depth": ["error", { "max": 2 }],
      "no-unused-vars": ["off"],
      "quotes": ["error", "double"],
      "padding-line-between-statements": ["error", { blankLine: "never", prev: "function", next: "function" }],
      "max-len": ["error", 150],
      "indent": ["error", 2, { SwitchCase: 1 }],
      "semi": ["error", "never"],
      "eqeqeq": ["error", "always"],
      "no-warning-comments": ["error"],
      "jsx-quotes": ["error", "prefer-double"],
      "@typescript-eslint/no-require-imports": "off",
      "react/function-component-definition": ["error", { "namedComponents": "arrow-function" }],
      "react/jsx-max-props-per-line": ["error", { "maximum": 1 }],
    }
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_", 
          argsIgnorePattern: "^_" 
        }
      ],
    }
  }
]
