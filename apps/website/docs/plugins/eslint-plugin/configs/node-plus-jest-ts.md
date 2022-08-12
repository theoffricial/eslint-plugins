---
id: node-plus-jest-ts
pagination_prev: plugins/eslint-plugin/configs/node-plus-jest-js-with-ts
pagination_next: plugins/eslint-plugin/configs/promise
# sidebar_position: 
---

# node-plus-jest-ts

This config extends our:
 -  **[es-modules-typescript config](plugins/eslint-plugin/configs/esm-typescript.md)**
 -  **[typescript-eslint-type-checking config](plugins/eslint-plugin/configs/ts-eslint-with-type-checking)**
 -  **[jest-for-typescript config](plugins/eslint-plugin/configs/jest-for-typescript.md)**


Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/node-plus-jest-ts"],
    ...
  }
```
