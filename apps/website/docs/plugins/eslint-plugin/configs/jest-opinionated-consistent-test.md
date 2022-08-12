---
id: jest-opinionated-consistent-test
pagination_prev: plugins/eslint-plugin/configs/jest-opinionated-consistent-it
pagination_next: plugins/eslint-plugin/configs/jest-opinionated-max-nested-describe
# sidebar_position: 
---

# jest-opinionated-consistent-test

This config includes rules from these plugins: 
  - 🏀 **[eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)**

## Rules table

🟡 Warn level | 🔴 Error level | 🔧 Is fixable | ⚙️ Our configuration

| Name                                    | Plugin | 🟡 | 🔴 | 🔧 | ⚙️ |
| --------------------------------------- | ------ | -- | -- | -- | -- |
| **jest/consistent-test-it**             |   🏀   |   | 🔴 | 🔧 | `{ fn: 'test', withinDescribe: 'test' }` |


Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/jest-opinionated-consistent-test"],
    ...
  }
```
