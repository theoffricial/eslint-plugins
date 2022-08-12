---
id: node-plus-jest-js-with-ts
pagination_prev: plugins/eslint-plugin/configs/node-plus-jest-js
pagination_next: plugins/eslint-plugin/configs/node-plus-jest-ts
# sidebar_position: 
---

# node-plus-jest-js-with-ts

This config extends our:
-  **[es-modules-js-with-ts config](plugins/eslint-plugin/configs/esm-js-with-ts.md)**
-  **[typescript-eslint-type-checking config](plugins/eslint-plugin/configs/ts-eslint-with-type-checking)**
-  **[promise config](plugins/eslint-plugin/configs/promise.md)**
-  **[jest config](plugins/eslint-plugin/configs/jest.md)**


Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/node-plus-jest-js-with-ts"],
    ...
  }
```
