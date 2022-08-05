---
id: eslint
pagination_next: plugins/eslint-plugin/configs/esm-javascript
# sidebar_position: 
---

# eslint

This config extends eslint's `eslint:recommended` config,<br/>
and includes extra rules from these plugins: 
  - ⚽️ **[eslint](https://eslint.org/docs/latest/rules/)**

## Additional rules table 

🟡 Warn level | 🔴 Error level | 🔧 Is fixable | ⚙️ Our configuration

| Name                                                 | Plugin | 🟡 | 🔴 | 🔧 | ⚙️ |
| ---------------------------------------------------- | ------ | -- | -- | -- | -- |
| **no-template-curly-in-string**                      |   ⚽️   | 🟡 |  |    |    |



Usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["@uniqorg"],
    "extends": ["plugin:@uniqorg/eslint"],
    ...
  }
```

