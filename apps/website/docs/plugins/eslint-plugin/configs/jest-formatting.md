---
id: jest-formatting
pagination_prev: plugins/eslint-plugin/configs/jest-for-typescript
pagination_next: plugins/eslint-plugin/configs/jest-opinionated-consistent-it
# sidebar_position: 
---

# jest-formatting

This config includes rules from these plugins: 
  - 🏀 **[eslint-plugin-jest-formatting](https://www.npmjs.com/package/eslint-plugin-jest-formatting)**

## Rules table

🟡 Warn level | 🔴 Error level | 🔧 Is fixable | ⚙️ Our configuration

| Name                                                   | Plugin | 🟡 | 🔴 | 🔧 | ⚙️ |
| ------------------------------------------------------ | ------ | -- | -- | -- | -- |
| **jest-formatting/padding-around-after-all-blocks**    |   🏀   |   | 🔴 | 🔧 |    |
| **jest-formatting/padding-around-after-each-blocks**   |   🏀   |   | 🔴 | 🔧 |    |
| **jest-formatting/padding-around-before-all-blocks**   |   🏀   |   | 🔴 | 🔧 |    |
| **jest-formatting/padding-around-before-each-blocks**  |   🏀   |   | 🔴 | 🔧 |    |
| **jest-formatting/padding-around-expect-groups**       |   🏀   |   | 🔴 | 🔧 |    |
| **jest-formatting/padding-around-describe-blocks**     |   🏀   |   | 🔴 | 🔧 |    |
| **jest-formatting/padding-around-test-blocks**         |   🏀   |   | 🔴 | 🔧 |    |
| **jest-formatting/padding-around-all**                 |   🏀   |   | 🔴 | 🔧 |    |

Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/jest-formatting"],
    ...
  }
```
