---
id: node-ts
pagination_prev: plugins/eslint-plugin/configs/node-js-with-ts
pagination_next: plugins/eslint-plugin/configs/node-plus-jest-js
# sidebar_position: 
---

# node-ts

This config extends our:
 -  **[es-modules-typescript config](plugins/eslint-plugin/configs/esm-typescript.md)**
-  **[typescript-eslint-with-type-checking config](plugins/eslint-plugin/configs/ts-eslint-with-type-checking.md)**
-  **[promise config](plugins/eslint-plugin/configs/promise.md)**


Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/node-ts"],
    ...
  }
```
