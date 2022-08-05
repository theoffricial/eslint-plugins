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

| Name                                                 | Plugin | 🟡 | 🔴 | 🔧 | 💡 | ⚙️ |
| ---------------------------------------------------- | ------ | -- | -- | -- | -- | -- |
| **no-duplicate-imports**                             |   ⚽️   |   | 🔴 |    |   |    |
| **no-import-assign**                                 |   ⚽️   |   | 🔴 |    |   |    |
| **no-useless-rename**                                |   ⚽️   |   | 🔴 |    |   |    |
| **no-restricted-imports**                            |   ⚽️   |   |   |    |   |    |
| **sort-imports**                                     |   ⚽️   |   | 🔴 | 🔧 |   | `{ ignoreCase: false, ignoreDeclarationSort: false, ignoreMemberSort: false, memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'], allowSeparatedGroups: false, }` |
| **unicorn/prefer-module**                            |   🎾   |   | 🔴 | 🔧 | 💡 |    |
| **unicorn/prefer-node-protocol**                     |   🎾   |   | 🔴 | 🔧 |   |    |
| **unicorn/import-style**                             |   🎾   |   | 🔴 |   |   |    |
| **import/no-unresolved**                             |   🏈   |   | 🔴 |   |   |    |
| **import/named**                                     |   🏈   |   | 🔴 |   |   |    |
| **import/default**                                   |   🏈   |   |    |   |   |    |
| **import/namespace**                                 |   🏈   |   | 🔴 |   |   | `{ allowComputed: false }` |
| **import/no-absolute-path**                          |   🏈   |   | 🔴 |   |   |    |
| **import/no-webpack-loader-syntax**                  |   🏈   |   | 🔴 |   |   |    |
| **import/no-self-import**                            |   🏈   |   | 🔴 |   |   |    |
| **import/no-useless-path-segments**                  |   🏈   |   | 🔴 | 🔧 |   | `{ noUselessIndex: true, commonjs: true }` |
| **import/error**                                     |   🏈   |   | 🔴 |   |   |    |
| **import/no-named-as-default-member**                |   🏈   |   | 🔴 |   |   |    |
| **import/no-deprecated**                             |   🏈   | 🟡 |   |   |   |    |
| **import/no-extraneous-dependencies**                |   🏈   | 🟡 |   |   |   |    |
| **import/no-mutable-exports**                        |   🏈   |   | 🔴 |   |   |    |
| **import/no-unused-modules**                         |   🏈   | 🟡 |   |   |   | `{ unusedExports: true }` |
| **import/no-cycle**                                  |   🏈   |   | 🔴 |   |   |    |
| **import/no-relative-packages**                      |   🏈   |   | 🔴 | 🔧 |   |    |
| **import/no-named-as-default**                       |   🏈   |   | 🔴 |   |   |    |
| **import/unambiguous**                               |   🏈   | 🟡 |   |   |   |    |
| **import/no-amd**                                    |   🏈   |   | 🔴 |   |   |    |
| **import/no-nodejs-modules**                         |   🏈   |   | 🔴 (should be disabled for non client-side projects) |   |   |    |
| **import/no-import-module-exports**                  |   🏈   |   | 🔴 |   |   |    |
| **import/no-namespace**                              |   🏈   |   |    | 🔧 |   |    |
| **import/extensions**                                |   🏈   |   | 🔴 |   |   | `{ js: 'never', jsx: 'never' }` |
| **import/order**                                     |   🏈   |   | 🔴 | 🔧 |   |  `{ groups: [ 'builtin', 'external', 'internal', 'parent', 'sibling', 'type', 'index', 'objects'] }`  |
| **import/newline-after-import**                      |   🏈   |   | 🔴 |   |   |    |
| **import/prefer-default-export**                     |   🏈   |   |   |   |   |    |
| **import/max-dependencies**                          |   🏈   |   |   |   |   |    |
| **import/forbid-unassigned-import**                  |   🏈   |   |   |   |   |    |
| **import/first**                                     |   🏈   |   | 🔴 | 🔧 |   |    |
| **import/exports-last**                              |   🏈   |   |   |   |   |    |
| **import/no-duplicates**                             |   🏈   |   | 🔴 |   |   |    |
| **import/no-named-export**                           |   🏈   |   |   |   |   |    |
| **import/no-anonymous-default-export**               |   🏈   |   |   |   |   |    |
| **import/group-exports**                             |   🏈   |   |   |   |   |    |
| **import/dynamic-import-chunkname**                  |   🏈   |   |   |   |   |    |
| **migrate-to-typescript/no-commonjs-exports**        |   🎱   | 🟡 |   | 🔧 |   |    |
| **migrate-to-typescript/no-commonjs-module-exports** |   🎱   | 🟡 |   | 🔧 |   |    |
| **migrate-to-typescript/no-require**                 |   🎱   | 🟡 |   |   |   |    |


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
