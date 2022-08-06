---
id: ts-eslint-opinionated-naming-convention
pagination_prev: plugins/eslint-plugin/configs/ts-eslint
pagination_next: plugins/eslint-plugin/configs/ts-eslint-with-type-checking
# sidebar_position: 
---

# ts-eslint-opinionated-naming-convention

This config extends our:
 - **[ts-eslint config](plugins/eslint-plugin/configs/ts-eslint.md)**

 And contains additional rules from:
 - 🪀 **[@typescript-eslint](https://typescript-eslint.io/)**


## Rules table

🟡 Warn level | 🔴 Error level | 🔧 Is fixable | ⚙️ Our configuration

| Name                                                 | Plugin | 🟡 | 🔴 | 🔧 | ⚙️ |
| ---------------------------------------- | ------ | -- | -- | -- | -- |
| **@typescript-eslint/naming-convention** |   🪀   |   | 🔴 |    | [rule in Github](https://github.com/uniqorg/eslint-extensions/blob/main/packages/eslint-plugin/src/configs/ts-eslint-opinionated-naming-convention.ts)  |




Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/ts-eslint-opinionated-naming-convention"],
    ...
  }
```
