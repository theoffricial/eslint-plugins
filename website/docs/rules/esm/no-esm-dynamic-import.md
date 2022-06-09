---
id: no-commonjs-dynamic-require
title: no-commonjs-dynamic-require
---

## Rule Details

The `import` keyword from `es` is used to import modules from different files. Using expressions (for instance, concatenating a path and variable) as the argument makes it harder for tools to do static code analysis, or to find where in the codebase a module is used.

This rule checks every call to `import('xxxx')` that uses expressions for the module name argument.

Examples of **correct** code for this rule ✅

```typescript
// correct ✅
import myModule from "my-module";
import { myModule } from "my-module";
import "my-module";
import("my-module");
```

Examples of **incorrect** code for this rule ⛔️

```typescript
// incorrect ⛔️
import(name);
import("../" + name);
import(`../${name}`);
import(name());
```

### When to use it

- Use for every project that works with modules and is consistently being developed and maintained.

### When _not_ to use it

- When writing specific script that should not execute often.

#### Credit 🙏

<sup>

Inspired with 💜 &nbsp;[from eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md)

</sup>
