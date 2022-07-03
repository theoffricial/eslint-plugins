---
sidebar_position: 1
displayed_sidebar: "migrate2typescriptSidebar"
---

# Getting Started

In 5 minutes ⏰ you will start using the `eslint-plugin-migrate-to-typescript` plugin

### Prerequisites

- Prerequisites: [Node.js](https://nodejs.org/en/) (`^12.22.0`, `^14.17.0`, or `>=16.0.0`) built with SSL support. (If you are using an official Node.js distribution, SSL is always built in.)

## Installation

with `npm`

```sh
# eslint-plugin-migrate-to-typescript has peer-dependencies that must be installed together with it
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

## Configuration

with `json`:

```json
// .eslintrc.json
{
  ...,
  "plugins": ["migrate-to-typescript"],
  ...
}
```

And in `YAML`:

```yaml
---
# .eslintrc.yaml
plugins:
  - migrate-to-typescript
```

###### For the full `eslint` configuration files format see eslint eslint's official document - [Configuration Files](https://eslint.org/docs/latest/user-guide/configuring/configuration-files).

## Usage

The "recommended" way to consume `eslint` plugins is to consume it's pre-defined configurations (see **Plugin's configs** section) in the `extends` property, like this:

```json
// .eslintrc.json
{
  ...,
  "plugins": ["migrate-to-typescript"],
  "extends": ["plugin:migrate-to-typescript/<config-name>"],
  ...
}
```

## Plugin's configs

### node-js-with-ts

For projects that include both `.ts` and `.js` files. Designed to support migration to `typescript`.

usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["migrate-to-typescript"],
    "extends": ["plugin:migrate-to-typescript/node-js-with-ts"],
    ...
  }
```

###### See what rules this config includes [here](./configs/node-js-with-ts.md)

### node-ts-only

For `typescript` projects. Designed to enforce the prevention of using `commonjs` syntax together with `typescript`.

usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["migrate-to-typescript"],
    "extends": ["plugin:migrate-to-typescript/node-ts-only"],
    ...
  }
```

###### See what rules this config includes [here](./configs/node-ts-only.md)

## Use rules manually

You can view the full rules list [here](./rules/index.md)
