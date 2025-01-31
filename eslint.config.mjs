import antfu from "@antfu/eslint-config";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";

export default antfu({
  type: "app",
  typescript: true,
  formatters: true,
  react: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
    jsx: true,
  },
  ignores: ["**/ui/**"],
}, {
  plugins: {
    tailwindcss: tailwindcssPlugin,
  },
  rules: {
    "no-console": ["warn"],
    "node/prefer-global/process": ["off"],
    "node/no-process-env": ["error"],
    "unused-imports/no-unused-imports": ["error"],
    "tailwindcss/classnames-order": ["error"],
    "ts/no-explicit-any": ["error"],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
      order: "asc",
      groups: [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling",
        "index",
      ],
      newlinesBetween: "always",
    }],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["README.md"],
    }],
    "ts/consistent-type-definitions": ["error", "interface"],
  },
});
