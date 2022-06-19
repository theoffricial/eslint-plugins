---
id: no-commonjs-dynamic-require
title: no-commonjs-dynamic-require
tags:
  - No CommonJS
  - No Hard Maintenance
sidebar_class_name: red
---

## Rule Details

The require method from `commonjs` is used to import modules from different files. Unlike the ES6 import syntax, it can be given expressions that will be resolved at runtime. While this is sometimes necessary and useful, in most cases it isn't. Using expressions (for instance, concatenating a path and variable) as the argument makes it harder for tools to do static code analysis, or to find where in the codebase a module is used.

This rule checks every call to require() that uses expressions for the module name argument.

Examples of **correct** code for this rule ✅

```typescript
// correct ✅
require("../name");
require(`../name`);
```

Examples of **incorrect** code for this rule ⛔️

```typescript
// incorrect ⛔️
require(name);
require("../" + name);
require(`../${name}`);
require(name());
```

### When to use it

- Use for every project that works with modules and consistently being develop and maintained.

### When _not_ to use it

- When writing specific script that should not execute often.

#### Credit 🙏

<sup>

Inspired with 💜 &nbsp;[from eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md)

</sup>
