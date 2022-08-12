---
sidebar_position: 1
---

# What ESLint plugins are?

`eslint` plugins are third-party extensions for eslint.

Before using the plugin, you have to install it.

Because our docs focus on opinionated conventions, for more general understanding here are some references/docs you can read:

1. The official `eslint` document ["Configuring Plugins"](https://eslint.org/docs/latest/user-guide/configuring/plugins).
2. A great explanation about the difference between an eslint `plugin` and an eslint `config` from [stackoverflow](https://stackoverflow.com/a/54522973/11554280).

## Our Plugins

### eslint-plugin-migrate-to-typescript

A compact plugin that aims to help you migrate existing javascript projects to typescript easily, with minimum effort, and minimum mistakes. Focusing on the main differences of javascript's module systems and typescript's ESM syntax (CommonJS and ESM).

**[Getting Started](./migrate-to-typescript/getting-started.md)**


### eslint-plugin

A set of eslint configs we put together for different development environments such as NodeJs, React, Jest, ESModules and more.
Each config aims to serve a specific technology (or a set) so multiple configs can be used at once to match your specific tech-stack.

**[Getting Started](./eslint-plugin/getting-started.md)**
