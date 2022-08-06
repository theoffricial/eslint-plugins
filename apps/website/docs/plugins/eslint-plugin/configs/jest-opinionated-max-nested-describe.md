---
id: jest-opinionated-max-nested-describe
pagination_prev: plugins/eslint-plugin/configs/jest-opinionated-consistent-test
pagination_next: plugins/eslint-plugin/configs/node-js
# sidebar_position: 
---

# jest-opinionated-max-nested-describe

This config includes rules from these plugins: 
  - 🏀 **[eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)**

## Rules table

🟡 Warn level | 🔴 Error level | 🔧 Is fixable | ⚙️ Our configuration

| Name                                    | Plugin | 🟡 | 🔴 | 🔧 | ⚙️ |
| --------------------------------------- | ------ | -- | -- | -- | -- |
| **jest/max-nested-describe**            |   🏀   |    | 🔴 |    | `{ max: 3 }` |


Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/jest-opinionated-max-nested-describe"],
    ...
  }
```
