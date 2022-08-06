---
id: ts-eslint-with-type-checking
pagination_prev: plugins/eslint-plugin/configs/ts-eslint-opinionated-naming-convention
# sidebar_position: 
---

# ts-eslint-with-type-checking

This config extends **[eslint](https://eslint.org/docs/latest/rules/)**'s `eslint:recommended` config,<br/>
and **[@typescript-eslint](https://typescript-eslint.io/)**'s `plugin:@typescript-eslint/recommended` and `plugin:@typescript-eslint/recommended-requiring-type-checking` configs.



Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/ts-eslint-with-type-checking"],
    ...
  }
```
