---
id: esm-opinionated-no-internal-modules
pagination_prev: plugins/eslint-plugin/configs/esm-typescript
pagination_next: plugins/eslint-plugin/configs/jest
# sidebar_position: 
---

# esm-opinionated-no-internal-modules

This config includes eslint rules from: 
  - 🏈 **[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)**

## Rules table

🟡 Warn level | 🔴 Error level | 🔧 Is fixable | ⚙️ Our configuration

| Name                                                 | Plugin | 🟡 | 🔴 | 🔧 | ⚙️ |
| ---------------------------------------------------- | ------ | -- | -- | -- | -- |
| **import/no-internal-modules**                       |   🏈   |   | 🔴 |    | ` { forbid: ['**/src/**/*', '**/components/**/*', '**/shared/**/*', '**/tests/**/*',], allow: ['**/actions/*', 'source-map-support/*'] }`  |




Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/esm-opinionated-no-internal-modules"],
    ...
  }
```
