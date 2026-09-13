import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";

// The legacy Next 15 config patches ESLint through its CommonJS require chain.
const require = createRequire(import.meta.url);
const { FlatCompat } = require("@eslint/eslintrc");
const baseDirectory = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory });
const config = [
  { ignores: [".next/**", "node_modules/**"] },
  ...compat.extends("next/core-web-vitals"),
];

export default config;
