---
id: jest-opinionated-consistent-it
pagination_prev: plugins/eslint-plugin/configs/jest-formatting
pagination_next: plugins/eslint-plugin/configs/jest-opinionated-consistent-test
# sidebar_position: 
---

# jest-opinionated-consistent-it

This config includes rules from these plugins: 
  - 🏀 **[eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)**

## Rules table

🟡 Warn level | 🔴 Error level | 🔧 Is fixable | ⚙️ Our configuration

| Name                                    | Plugin | 🟡 | 🔴 | 🔧 | ⚙️ |
| --------------------------------------- | ------ | -- | -- | -- | -- |
| **jest/consistent-test-it**                  |   🏀   |   | 🔴 | 🔧 | `{ fn: 'it', withinDescribe: 'it' }` |


Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/jest-opinionated-consistent-it"],
    ...
  }
```
