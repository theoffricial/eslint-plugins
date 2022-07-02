---
title: Rules Table 💬 | 🔧 | 💡
tags:
  - Rules
sidebar_position: 1
pagination_prev: null
---

# Rules Table &nbsp; 💬 &nbsp; | 🔧 &nbsp; | &nbsp; 💡

- 💬 - description
- 🔧 - fixable
- 💡 - suggestion

| name                                                            | description                                                              | 🔧  | 💡  |
| --------------------------------------------------------------- | ------------------------------------------------------------------------ | --- | --- |
| [no-commonjs-dynamic-require](./no-commonjs-dynamic-require.md) | Avoid using dynamic commonjs `require`, only top level                   |     |     |
| [no-commonjs-exports](./no-commonjs-exports.md)                 | Avoid using commonjs `exports` to encourage esm `export`                 | 🔧  |     |
| [no-commonjs-module-exports](./no-commonjs-module-exports.md)   | Avoid using commonjs `module.exports` to encourage esm `export`          | 🔧  |     |
| [no-esm-dynamic-import](./no-esm-dynamic-import.md)             | Avoid using dynamic esm `import(...)`, only top level                    |     |     |
| [no-esm-export-default](./no-esm-export-default.md)             | Avoid using esm `export default` to encourage named `export`             |     |     |
| [no-require](./no-require.md)                                   | Avoid using commonjs `require` to encourage using top-level esm `import` |     |     |
| [esm-consistent-type-import](./esm-consistent-type-import.md)   | Consistently split between type `import` and value `import`              | 🔧  |     |
