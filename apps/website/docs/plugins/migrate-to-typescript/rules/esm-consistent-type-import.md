---
id: esm-consistent-type-import
title: esm-consistent-type-import
tags:
  - ESM
---

## Rule Details

Enforces consistent usage of type imports, by splitting type-imports from value-imports.

TypeScript 3.8 added support for type-only imports. Type-only imports allow you to specify that an import can only be used in a type location, allowing certain optimizations within compilers.

- the rule is automatically **🔧 fixable**

Examples of **correct** code for this rule ✅

```typescript
// correct ✅
import { myValueProperty } from "my-module";
import type { IMyInterfaceProperty } from "my-module";
```

Examples of **incorrect** code for this rule ⛔️

```typescript
// incorrect ⛔️
import { myValueProperty, IMyInterfaceProperty } from "my-module";
```

### When to use it

- Whenever possible, this approach does no harm and letting both developers and building tools (e.g. `babel`) to understand intuitively,
  how an import module's property should be used or be built, for instance, `types` of any kind should be avoid on any build's output.

### When _not_ to use it

- If you are not using TypeScript 3.8 (or greater), then you will not be able to use this rule, as type-only imports are not allowed.
- If you specifically want to use both import kinds for stylistic reasons, you can disable this rule.

#### Credit 🙏

<sup>

Inspired by &nbsp;[from typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md) 💜

</sup>
