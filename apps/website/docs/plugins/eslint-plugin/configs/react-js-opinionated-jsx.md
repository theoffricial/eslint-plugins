---
id: react-js-opinionated-jsx
pagination_prev: plugins/eslint-plugin/configs/react-js
pagination_next: plugins/eslint-plugin/configs/react-js-with-ts
# sidebar_position: 
---

# react-js-opinionated-jsx

This config includes rules from these plugins: 
  - 🏓 **[react](https://www.npmjs.com/package/eslint-plugin-react)**
  - 🏏 **[react-hooks](https://www.npmjs.com/package/https://www.npmjs.com/package/eslint-plugin-react-hooks)**

## Rules table

🟡 Warn level | 🔴 Error level | 🔧 Is fixable | ⚙️ Our configuration

| Name                                        | Plugin | 🟡 | 🔴 | 🔧 | ⚙️ |
| ------------------------------------------- | ------ | -- | -- | -- | -- |
| **react/jsx-boolean-value**                 |   🏓   |   | 🔴 |    |    |
| **react/jsx-closing-bracket-location**      |   🏓   |   | 🔴 |    |    |
| **react/jsx-closing-tag-location**          |   🏓   |   | 🔴 |    |    |
| **react/jsx-curly-spacing**                 |   🏓   |   | 🔴 |    |    |
| **react/jsx-curly-newline**                 |   🏓   |   | 🔴 |    |    |
| **react/jsx-equals-spacing**                |   🏓   |   | 🔴 |    | `'never'` |
| **react/jsx-first-prop-new-line**           |   🏓   |   | 🔴 |    |    |
| **react/jsx-one-expression-per-line**       |   🏓   |   | 🔴 |    |    |
| **react/jsx-pascal-case**                   |   🏓   |   | 🔴 |    |    |
| **react/jsx-sort**                          |   🏓   | 🟡 |   |    | `{ callbacksLast: true, shorthandFirst: true, multiline: 'last', ignoreCase: true }` |

Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/react-js-opinionated-jsx"],
    ...
  }
```
