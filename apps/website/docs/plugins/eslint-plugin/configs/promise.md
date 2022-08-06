---
id: promise
pagination_prev: plugins/eslint-plugin/configs/node=plus-jest-ts
pagination_next: plugins/eslint-plugin/configs/react-js
# sidebar_position: 
---

# promise

This config includes rules from these plugins: 
  - 🏀 **[eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)**

## Rules table

🟡 Warn level | 🔴 Error level | 🔧 Is fixable | ⚙️ Our configuration

| Name                                    | Plugin | 🟡 | 🔴 | 🔧 | ⚙️ |
| --------------------------------------- | ------ | -- | -- | -- | -- |
| **promise/always-return**               |   🏀   |   | 🔴 |    |    |
| **promise/no-return-wrap**              |   🏀   |   | 🔴 |    |    |
| **promise/param-names**                 |   🏀   |   | 🔴 |    |    |
| **promise/catch-or-return**             |   🏀   |   | 🔴 |    |    |
| **promise/no-native**                   |   🏀   |   |    |    |    |
| **promise/no-nesting**                  |   🏀   | 🟡 |   |    |    |
| **promise/no-promise-in-callback**      |   🏀   | 🟡 |   |    |    |
| **promise/no-callback-in-promise**      |   🏀   | 🟡 |   |    |    |
| **promise/avoid-new**                   |   🏀   |   |    |    |    |
| **promise/no-new-statics**              |   🏀   |   | 🔴 | 🔧 |    |
| **promise/no-return-in-finally**        |   🏀   | 🟡 |   |    |    |
| **promise/valid-params**                |   🏀   | 🟡 |   |    |    |
| **promise/no-promise-executor-return**  |   🏀   |   | 🔴 |    |    |


Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/promise"],
    ...
  }
```
