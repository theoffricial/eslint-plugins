---
id: esm-javascript
pagination_prev: plugins/eslint-plugin/configs/eslint
pagination_next: plugins/eslint-plugin/configs/esm-js-with-ts
# sidebar_position: 
---

# esm-javascript

This config includes eslint rules from: 
 ⚽️ **[eslint](https://eslint.org/docs/latest/rules/)**
 🏈 **[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)**
 🎾 **[eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)**
 🎱 **[eslint-plugin-migrate-to-typescript](https://www.npmjs.com/package/eslint-plugin-migrate-to-typescript)**

## Rules table

🟡 Warn level | 🔴 Error level | 🔧 Is fixable | ⚙️ Our configuration

| Name                                     | Plugin | 🟡 | 🔴 | 🔧 | 💡 | ⚙️ |
| ---------------------------------------- | ------ | -- | -- | -- | -- | -- |
| **no-duplicate-imports**                 |   ⚽️   |   | 🔴 |    |   |    |
| **no-import-assign**                     |   ⚽️   |   | 🔴 |    |   |    |
| **no-useless-rename**                    |   ⚽️   |   | 🔴 |    |   |    |
| **no-restricted-imports**                |   ⚽️   |   |   |    |   |    |
| **sort-imports**                         |   ⚽️   |   | 🔴 | 🔧 |   | `{ ignoreCase: false, ignoreDeclarationSort: false, ignoreMemberSort: false, memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'], allowSeparatedGroups: false, }` |
| **unicorn/prefer-module**                |   🎾   |   | 🔴 | 🔧 | 💡 |    |
| **unicorn/prefer-node-protocol**         |   🎾   |   | 🔴 | 🔧 |   |    |
| **unicorn/import-style**                 |   🎾   |   | 🔴 |   |   |    |
| **import/no-unresolved**                 |   🏈   |   | 🔴 |   |   |    |
| **import/named**                         |   🏈   |   | 🔴 |   |   |    |
| **import/default**                       |   🏈   |   |    |   |   |    |
| **import/namespace**                     |   🏈   |   | 🔴 |   |   | `{ allowComputed: false }` |
| **import/no-absolute-path**              |   🏈   |   | 🔴 |   |   |    |
| **import/no-webpack-loader-syntax**      |   🏈   |   | 🔴 |   |   |    |
| **import/no-self-import**                |   🏈   |   | 🔴 |   |   |    |
| **import/no-useless-path-segments**      |   🏈   |   | 🔴 |   | 🔧 | `{ noUselessIndex: true, commonjs: true }` |

still in progress...

usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/esm-javascript"],
    ...
  }
```
