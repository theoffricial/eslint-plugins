---
id: node-js
pagination_prev: plugins/eslint-plugin/configs/jest-opinionated-max-nested-describe
pagination_next: plugins/eslint-plugin/configs/node-js-with-ts
# sidebar_position: 
---

# node-js

This config extends our:
 -  **[es-modules-typescript config](plugins/eslint-plugin/configs/esm-typescript)**
-  **[typescript-eslint-with-type-checking config](plugins/eslint-plugin/configs/typescript-eslint-with-type-checking)**
-  **[es-modules-typescript config](plugins/eslint-plugin/configs/promise)**


Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/node-js"],
    ...
  }
```
