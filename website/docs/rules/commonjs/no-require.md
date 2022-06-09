---
id: no-require
title: no-require
---

## Rule Details

Disallows invocation of `require()`.

Prefer the newer `ES` modules style `import`s over `require()`.

Examples of **correct** code for this rule ✅

```typescript
// correct ✅
import myModule from "my-module";
```

Examples of **incorrect** code for this rule ⛔️

```typescript
// incorrect ⛔️
require("my-module");
require(someVar);
require;
```

### When to use it

- When migrating your project/codebase to use `es` modules - When migrating to `typescript` which supports and recommends to use `es` modules syntax.

### When _not_ to use it

- When your project is `nodejs` that runs on `javascript` only.
- When your front-end application supports `RequireJS` explicitly.

#### Credit 🙏

<sup>

Inspired with 💜 &nbsp;[from typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-require-imports.md)

</sup>
