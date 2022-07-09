import type { ESLint } from "eslint";
// import { rules } from 'eslint-plugin-jest'
const jestWithTsConfig: Partial<ESLint.ConfigData> = {
  plugins: ["jest", "@typescript-eslint", "migrate-to-typescript"],
  parser: "@typescript-eslint/parser",
  extends: ["plugin:migrate-to-typescript/node-ts-only"],
  env: {
    jest: true,
  },
  rules: {
    // general rules
    "jest/consistent-test-it": [
      "error",
      {
        fn: "test",
        withinDescribe: "test",
      },
    ],
    "jest/expect-expect": "error",
    "jest/max-nested-describe": [
      "error",
      {
        max: 3,
      },
    ],
    "jest/no-alias-methods": "error",
    "jest/no-commented-out-tests": "error",
    "jest/no-conditional-expect": "error",
    "jest/no-conditional-in-test": "error",
    "jest/no-deprecated-functions": "error",
    "jest/no-disabled-tests": "error",
    "jest/no-done-callback": "error",
    "jest/no-duplicate-hooks": "off",
    "jest/no-export": "error",
    "jest/no-focused-tests": "warn",
    "jest/no-hooks": "off",
    "jest/no-identical-title": "error",
    "jest/no-interpolation-in-snapshots": "error",
    "jest/no-jasmine-globals": "error",
    "jest/no-jest-import": "error",
    "jest/no-large-snapshots": "error",
    "jest/no-mocks-import": "error",
    "jest/no-restricted-matchers": "off",
    "jest/no-standalone-expect": "error",
    "jest/no-test-prefixes": "warn",
    "jest/no-test-return-statement": "error",
    "jest/prefer-called-with": "error",
    "jest/prefer-comparison-matcher": "error",
    "jest/prefer-equality-matcher": "error",
    "jest/prefer-expect-assertions": "off",
    "jest/prefer-expect-resolves": "error",
    "jest/prefer-hooks-in-order": "warn",
    "jest/prefer-hooks-on-top": "warn",
    "jest/prefer-lowercase-title": "error",
    "jest/prefer-snapshot-hint": "error",
    "jest/prefer-spy-on": "error",
    "jest/prefer-strict-equal": "error",
    "jest/prefer-to-be": "error",
    "jest/prefer-to-contain": "error",
    "jest/prefer-to-have-length": "error",
    "jest/prefer-todo": "warn",
    "jest/require-hook": "error",
    "jest/require-to-throw-message": "error",
    "jest/require-top-level-describe": "error",
    "jest/valid-describe-callback": "error",
    "jest/valid-expect": "error",
    "jest/valid-expect-in-promise": "error",
    "jest/valid-title": "error",
  },
  overrides: [
    {
      // typescript
      files: [".ts", ".tsx"],
      rules: {
        "jest/unbound-method": [
          "error",
          {
            ignoreStatic: true,
          },
        ],
      },
    },
    {
      // javascript,
      files: [],
    },
  ],
};
export = jestWithTsConfig;
