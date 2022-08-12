---
id: jest-for-typescript
pagination_prev: plugins/eslint-plugin/configs/jest
pagination_next: plugins/eslint-plugin/configs/jest-formatting
# sidebar_position: 
---

# jest-for-typescript

This config includes rules from these plugins: 
  - 🏀 **[eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)**

## Rules table

🟡 Warn level | 🔴 Error level | 🔧 Is fixable | ⚙️ Our configuration

| Name                                    | Plugin | 🟡 | 🔴 | 🔧 | ⚙️ |
| --------------------------------------- | ------ | -- | -- | -- | -- |
| **jest/expect-expect**                  |   🏀   |   | 🔴 |    |    |
| **jest/no-alias-methods**               |   🏀   |   | 🔴 | 🔧 |    |
| **jest/no-commented-out-tests**         |   🏀   |   | 🔴 |    |    |
| **jest/no-conditional-expect**          |   🏀   |   | 🔴 |    |    |
| **jest/no-conditional-in-test**         |   🏀   |   | 🔴 |    |    |
| **jest/no-deprecated-functions**        |   🏀   |   | 🔴 | 🔧 |    |
| **jest/no-disabled-tests**              |   🏀   |   | 🔴 |    |    |
| **jest/no-done-callback**               |   🏀   |   | 🔴 |    |    |
| **jest/no-duplicate-hooks**             |   🏀   |   |    |    |    |
| **jest/no-export**                      |   🏀   |   | 🔴 |    |    |
| **jest/no-focused-tests**               |   🏀   | 🟡 |   |    |    |
| **jest/no-hooks**                       |   🏀   |   |    |    |    |
| **jest/no-identical-title**             |   🏀   |   | 🔴 |    |    |
| **jest/no-interpolation-in-snapshots**  |   🏀   |   | 🔴 |    |    |
| **jest/no-jasmine-globals**             |   🏀   |   | 🔴 | 🔧 |    |
| **jest/no-jest-import**                 |   🏀   |   | 🔴 |    |    |
| **jest/no-large-snapshots**             |   🏀   |   | 🔴 |    |    |
| **jest/no-mocks-import**                |   🏀   |   | 🔴 |    |    |
| **jest/no-restricted-matchers**         |   🏀   |   |    |    |    |
| **jest/no-standalone-expect**           |   🏀   |   | 🔴 |    |    |
| **jest/no-test-prefixes**               |   🏀   | 🟡 |   | 🔧 |    |
| **jest/no-test-return-statement**       |   🏀   |   | 🔴 |    |    |
| **jest/prefer-called-with**             |   🏀   |   | 🔴 |    |    |
| **jest/prefer-comparison-matcher**      |   🏀   |   | 🔴 | 🔧 |    |
| **jest/prefer-equality-matcher**        |   🏀   |   | 🔴 |    |    |
| **jest/prefer-expect-assertions**       |   🏀   |   |    |    |    |
| **jest/prefer-expect-resolves**         |   🏀   |   | 🔴 | 🔧 |    |
| **jest/prefer-hooks-in-order**          |   🏀   | 🟡 |   |    |    |
| **jest/prefer-hooks-on-top**            |   🏀   | 🟡 |    |    |    |
| **jest/prefer-lowercase-title**         |   🏀   |   | 🔴 | 🔧 |    |
| **jest/prefer-snapshot-hint**           |   🏀   |   | 🔴 |    |    |
| **jest/prefer-spy-on**                  |   🏀   |   | 🔴 | 🔧 |    |
| **jest/prefer-strict-equal**            |   🏀   |   | 🔴 |    |    |
| **jest/prefer-to-be**                   |   🏀   |   | 🔴 | 🔧 |    |
| **jest/prefer-to-contain**              |   🏀   |   | 🔴 | 🔧 |    |
| **jest/prefer-to-have-length**          |   🏀   |   | 🔴 | 🔧 |    |
| **jest/prefer-todo**                    |   🏀   | 🟡 |   | 🔧 |    |
| **jest/require-hook**                   |   🏀   |   | 🔴 |    |    |
| **jest/require-to-throw-message**       |   🏀   |   | 🔴 |    |    |
| **jest/require-top-level-describe**     |   🏀   |   | 🔴 |    |    |
| **jest/valid-describe-callback**        |   🏀   |   | 🔴 |    |    |
| **jest/valid-expect**                   |   🏀   |   | 🔴 |    |    |
| **jest/valid-expect-in-promise**        |   🏀   |   | 🔴 |    |    |
| **jest/valid-title**                    |   🏀   |   | 🔴 | 🔧 |    |
| **jest/unbound-method**                 |   🏀   |   | 🔴 |    | `{ignoreStatic: true }` |


Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/jest-for-typescript"],
    ...
  }
```
