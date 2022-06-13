---
id: no-esm-export-default
title: no-esm-export-default
tags:
  - No Hard Maintenance
  - No Regression
---

## Rule Details

Prohibit default exports.

Examples of **correct** code for this rule ✅

```typescript
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
export default {};
export default someVar;
export default "primitive";
export default () => {};
```

### When to use it

- Your project contains both `commonjs` modules and `es` modules, happens most commonly in projects that contains both `JavaScript` and `TypeScript`, using `export default` might cause unexpected behaviors, more info at https://www.typescriptlang.org/tsconfig#esModuleInterop.
- You just don't like the ES modules approach for `export default`.
- Using `named` exports support naming consistency and because of that, make your codebase more searchable while developing with an IDE.

### When _not_ to use it

- When preferring modules that have a single export to "export default" _plus_ the project is fully using `es` modules, so no mix between `commonjs` modules and `es` modules.

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

Inspired with 💜 &nbsp;[from eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md)

</sup>
