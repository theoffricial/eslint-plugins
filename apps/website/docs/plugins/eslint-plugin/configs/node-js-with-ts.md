---
id: node-js-with-ts
pagination_prev: plugins/eslint-plugin/configs/node-js
pagination_next: plugins/eslint-plugin/configs/node-ts
# sidebar_position: 
---

# node-js-with-ts

This config extends our:
 -  **[es-modules-js-with-ts config](plugins/eslint-plugin/configs/esm-js-with-ts.md)**
-  **[typescript-eslint config](plugins/eslint-plugin/configs/typescript-eslint.md)**
-  **[promise config](plugins/eslint-plugin/configs/promise.md)**


Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/node-js-with-ts"],
    ...
  }
```
