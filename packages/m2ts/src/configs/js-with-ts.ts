export = {
  plugins: ["migrate-to-typescript"],
  rules: {
    "no-esm-dynamic-import": ["warn"],
    "no-commonjs-dynamic-require": ["warn"],
    "no-commonjs-exports": "warn",
    "no-commonjs-module-exports": "warn",
    "no-require": "warn",
  },
};
