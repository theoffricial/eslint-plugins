---
id: react-js
pagination_prev: plugins/eslint-plugin/configs/promise
pagination_next: plugins/eslint-plugin/configs/react-js-opinionated-jsx
# sidebar_position: 
---

# react-js

This config includes rules from these plugins: 
  - 🏓 **[react](https://www.npmjs.com/package/eslint-plugin-react)**
  - 🏏 **[react-hooks](https://www.npmjs.com/package/https://www.npmjs.com/package/eslint-plugin-react-hooks)**

## Rules table

🟡 Warn level | 🔴 Error level | 🔧 Is fixable | ⚙️ Our configuration

| Name                                        | Plugin | 🟡 | 🔴 | 🔧 | ⚙️ |
| ------------------------------------------- | ------ | -- | -- | -- | -- |
| **react/default-props-match-prop-types**    |   🏓   |   | 🔴 |    |    |
| **react/no-invalid-html-attribute**         |   🏓   | 🟡 |   |    |    |
| **react/no-access-state-in-setstate**       |   🏓   |   | 🔴 |    |    |
| **react/no-array-index-key**                |   🏓   |   | 🔴 |    |    |
| **react/no-children-prop**                  |   🏓   |   | 🔴 |    |    |
| **react/no-danger**                         |   🏓   | 🟡 |   |    |    |
| **react/no-danger-with-children**           |   🏓   |   | 🔴 |    |    |
| **react/no-deprecated**                     |   🏓   | 🟡 |   |    |    |
| **react/no-direct-mutation-state**          |   🏓   |   | 🔴 |    |    |
| **react/no-find-dom-node**                  |   🏓   | 🟡 |   |    |    |
| **react/no-is-mounted**                     |   🏓   |   | 🔴 |    |    |
| **react/no-string-refs**                    |   🏓   |   | 🔴 |    |    |
| **react/no-render-return-value**            |   🏓   |   | 🔴 |    |    |
| **react/no-this-in-sfc**                    |   🏓   |   | 🔴 |    |    |
| **react/no-typos**                          |   🏓   |   | 🔴 |    |    |
| **react/no-unescaped-entities**             |   🏓   | 🟡 |   |    | `{ forbid: ['>', '}'] }` |
| **react/no-unknown-property**               |   🏓   |   | 🔴 |    |    |
| **react/no-unsafe**                         |   🏓   | 🟡 |   |    |    |
| **react/no-unstable-nested-components**     |   🏓   | 🟡 |   |    |    |
| **react/no-unused-class-component-methods** |   🏓   |   | 🔴 |    |    |
| **react/no-unused-state**                   |   🏓   |   | 🔴 |    |    |
| **react/no-will-update-set-state**          |   🏓   |   | 🔴 |    |    |
| **react/prop-types**                        |   🏓   |   | 🔴 |    |    |
| **react/require-render-return**             |   🏓   |   | 🔴 |    |    |
| **react/self-closing-comp**                 |   🏓   |   | 🔴 |    |    |
| **react/void-dom-elements-no-children**     |   🏓   |   | 🔴 |    |    |
| **react/jsx-indent**                        |   🏓   |   | 🔴 |    |    |
| **react/jsx-indent-props**                  |   🏓   |   | 🔴 |    |    |
| **react/jsx-key**                           |   🏓   |   | 🔴 |    |    |
| **react/jsx-max-props-per-line**                 |   🏓   |   | 🔴 |    | `{ maximum: 1, when: 'multiline' }` |
| **react/jsx-no-bind**                       |   🏓   | 🟡 |   |    |    |
| **react/jsx-no-comment-textnodes**          |   🏓   |   | 🔴 |    |    |
| **react/jsx-no-duplicate-props**            |   🏓   |   | 🔴 |    |    |
| **react/jsx-no-leaked-render**              |   🏓   | 🟡 |   |    | `{ validStrategies: ['coerce', 'ternary'] }` |
| **react/jsx-no-script-url**                 |   🏓   | 🟡 |   |    |    |
| **react/jsx-no-target-blank**               |   🏓   |   | 🔴 |    |    |
| **react/jsx-no-undef**                      |   🏓   |   | 🔴 |    |    |
| **react/jsx-no-useless-fragment**           |   🏓   | 🟡 |   |    |    |
| **react/jsx-curly-brace-presence**          |   🏓   |   | 🔴 |    |    |
| **react/jsx-fragments**                     |   🏓   | 🟡 |   |    |    |
| **react/jsx-uses-react**                    |   🏓   |   | 🔴 |    |    |
| **react/jsx-uses-vars**                     |   🏓   |   | 🔴 |    |    |
| **react/jsx-wrap-multilines**               |   🏓   |   | 🔴 |    |    |
| **react-hooks/rules-of-hooks**              |   🏏   |   | 🔴 |    |    |
| **react-hooks/exhaustive-deps**             |   🏏   | 🟡 |   |    |    |


Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/react-js"],
    ...
  }
```
