---
id: ts-eslint
pagination_prev: plugins/eslint-plugin/configs/node-js-with-ts
pagination_next: plugins/eslint-plugin/configs/node-plus-jest-js
# sidebar_position: 
---

# ts-eslint

This config extends **[eslint](https://eslint.org/docs/latest/rules/)**'s `eslint:recommended` config<br/>
and **[@typescript-eslint](https://typescript-eslint.io/)**'s `@typescript-eslint/recommended`. <br/>


Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/ts-eslint"],
    ...
  }
```
