---
id: no-commonjs-module-exports
title: no-commonjs-module-exports
tags:
  - No CommonJS
---

## Rule Details

Disallows invocation of commonjs `module.exports` keyword.

Prefer the `es` modules export syntax `export`s
over `commonjs` modules export syntax `module.exports`.

Examples of **correct** code for this rule ✅

```typescript
// correct ✅
export const x = 1;
export function myFunc() {}
// TS exclusive examples
export interface INum {
  num: number;
}
export enum EMyEnum {
  First = 1,
}
```

Examples of **incorrect** code for this rule ⛔️

```typescript
// incorrect ⛔️
module.exports.x = 1;
module.exports.x = someVar;
module.exports.x = function myFun() => {};
module.exports = () => {};
module.exports = "primitive";
module.exports = someVar;
```

### When to use it

- When prefer the `es` modules style `export`s over `exports = { }`.
- While migrating your project/codebase to `typescript` from `javascript`.

### When _not_ to use it

- On projects that using `commonjs` modules only, commonly these projects are `nodejs` over `javascript` only.

### How to use it manually (not as part of a config)

```json
{
    // eslintrc.json
    ...,
    "rules": {
        "migrate-to-typescript/no-commonjs-module-exports": "warn"
    },
    ...more properties
}
// set to "warn" to push your project into full migration to esm
// set to "error" when your project is fully esm
```

#### Credit 🙏

<sup>

Inspired by [from eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md) 💜

</sup>
