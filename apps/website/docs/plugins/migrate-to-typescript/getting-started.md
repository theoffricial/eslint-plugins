---
sidebar_position: 1
displayed_sidebar: "migrate2typescriptSidebar"
---

# Getting Started

This is a 5 minutes guide how to work with the `eslint-plugin-migrate-to-typescript` plugin

Let's discover `eslint-plugin-migrate-to-typescript` in
**less than 5 minutes**.

### Prerequisites

- Prerequisites: [Node.js](https://nodejs.org/en/) (`^12.22.0`, `^14.17.0`, or `>=16.0.0`) built with SSL support. (If you are using an official Node.js distribution, SSL is always built in.)

## Installation

with `npm`

```sh
# eslint-plugin-migrate-to-typescript has peer-dependencies the must be installed together with it
# install peer-deps
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/types @typescript-eslint/utils
# then install the plugin
npm install --save-dev  eslint-plugin-migrate-to-typescript
```

with `yarn`

```sh
# install peer-deps
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/types @typescript-eslint/utils
# then install the plugin
yarn add -D eslint-plugin-migrate-to-typescript
```

## Configuring

with `json`:

```json
{
  // .eslintrc.json
  "plugins": ["migrate-to-typescript"]
}
```

And in `YAML`:

```yaml
---
# .eslintrc.yaml
plugins:
  - migrate-to-typescript
```

###### For the full `eslint` configuration files format see eslint offical document - [Configuration Files](https://eslint.org/docs/latest/user-guide/configuring/configuration-files).

## usage

the "recommended" way to consume `eslint` plugins is to consume it's pre-defined configurations in the `extends` property, like this:

```json
// .eslintrc.json
{
  "extends": ["plugin:migrate-to-typescript/<pre-defined-config-name>"]
}
```

## plugin's configs

### node-js-with-ts

For projects that combines both `.ts` and `.js` files, designed to support migration to `typescript`.

usage:

```json
  // .eslintrc.json
  {
    ...,
    "extends": ["plugin:migrate-to-typescript/node-js-with-ts"]
  }
```

###### See what rules the config includes [here](./configs/index.md)

### node-ts-only

For full `typescript` projects, designed to enforce to stop using `commonjs` syntax together with `typescript`.

usage:

```json
  // .eslintrc.json
  {
    ...,
    "extends": ["plugin:migrate-to-typescript/node-ts-only"]
  }
```

###### See what rules the config includes [here](./configs/index.md)

## use manual rules

You can view the full rules list here
