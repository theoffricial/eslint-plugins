---
id: no-commonjs-exports
title: no-commonjs-exports
---

## Rule Details

Disallows invocation of `exports` `commonjs` keyword.

Prefer the `es` modules style `export`s over `require()`.

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
var lib = require("lib");
let lib2 = require("lib2");
var lib5 = require("lib5"),
  lib6 = require("lib6");
import lib8 = require("lib8");
```

### When to use it

- When prefer the `es` modules style `export`s over `exports = { }`.
- While migrating your project/codebase to `typescript` from `javascript`.

### When _not_ to use it

- On projects that using `commonjs` modules only, commonly these projects are `nodejs` over `javascript` only.

#### Credit 🙏

<sup>

Inspired with 💜 &nbsp;[from eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md)

</sup>
