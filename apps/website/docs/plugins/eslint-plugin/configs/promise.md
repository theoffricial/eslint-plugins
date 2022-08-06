---
id: promise
pagination_prev: plugins/eslint-plugin/configs/node-plus-jest-ts
pagination_next: plugins/eslint-plugin/configs/react-js
# sidebar_position: 
---

# promise

This config extends eslint-plugin-promise's `eslint-plugin-promise:recommended` config,<br/>
and includes extra rules from these plugins: 
  - 🏉 **[eslint-plugin-promise](https://eslint.org/docs/latest/rules/)**

## Additional rules table 

🟡 Warn level | 🔴 Error level | 🔧 Is fixable | ⚙️ Our configuration

| Name                                    | Plugin | 🟡 | 🔴 | 🔧 | ⚙️ |
| --------------------------------------- | ------ | -- | -- | -- | -- |
| **promise/no-promise-executor-return**  |   🏉   |   | 🔴 |    |    |


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
