---
id: no-commonjs-exports
title: no-commonjs-exports
tags:
  - No CommonJS
---

## Rule Details

Disallows invocation of commonjs `exports` keyword.

Prefer the `es` modules export syntax `export`
over `commonjs` modules export syntax `exports`.

Examples of **correct** code for this rule ✅

```typescript
// correct ✅
export const x = 1;
export function myFunc() {}
// default
export default = {}
// TS exclusive examples
export interface INum {
  num: number;
}
export enum EMyEnum {
  First = 1,
}
// typescript wrapper for commonjs export
// (this is not a native ESM syntax!)
export = {}
```

Examples of **incorrect** code for this rule ⛔️

```typescript
// incorrect ⛔️
exports.x = 1;
exports.x = someVar;
exports.x = function myFun() => {};
exports = () => {};
exports = "primitive";
exports = someVar;
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
        "migrate-to-typescript/no-commonjs-exports": "warn"
    },
    ...more properties
}
// set to "warn" to push your project into full migration to esm
// set to "error" when your project is fully esm
```

#### Credit 🙏

<sup>

Inspired with 💜 &nbsp;[from eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md)

</sup>
