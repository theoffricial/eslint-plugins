---
sidebar_position: 1
displayed_sidebar: "migrate2typescriptSidebar"
---

# Getting Started

This is a 5 minutes guide how to work with the `eslint-plugin-migrate-to-typescript` plugin

Let's discover `eslint-plugin-migrate-to-typescript` in
**less than 5 minutes**.

## Installation and Usage

### Prerequisites

- Prerequisites: [Node.js](https://nodejs.org/en/) (`^12.22.0`, `^14.17.0`, or `>=16.0.0`) built with SSL support. (If you are using an official Node.js distribution, SSL is always built in.)

add `eslint-plugin-migrate-to-typescript` to your project

### Install with npm

```sh
# eslint-plugin-migrate-to-typescript has peer-dependencies the must be installed together with it
# install peer-deps
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/types @typescript-eslint/utils
# then install the plugin
npm install --save-dev  eslint-plugin-migrate-to-typescript
```

### Install with yarn

```sh
# install peer-deps
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/types @typescript-eslint/utils
# then install the plugin
yarn add -D eslint-plugin-migrate-to-typescript
```

## Configuring

### What you'll need

- Using `@typescript-eslint/parser` as your `eslint` parser.
- depends on [Node.js](https://nodejs.org/en/download/), supported versions for `@typescript-eslint/parser` are:

```json
// took from package.json
  "engines": {
    "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
  },
```

## Add plugin to your existing eslintrc

For npm configuration

```json
// package.json
{
  ...,
  "eslintConfig": {
    ...,
    "parser": "@typescript-eslint/parser",
    "plugins": [..., "migrate-to-typescript"],
    "extends": [
      ...,
      // for projects that starting/in the middle of migration to typescript
      "migrate-to-typescript/js-with-ts",
      // or
      // for projects that are fully working with typescript
      "migrate-to-typescript/ts-only",
      // or
      // for projects (mostly front-end) that written with js and using ts for type-checking or type-generating
      "migrate-to-typescript/js-only-and-ts-for-type-checking",
    ]
  }
}
```

For eslintrc.json

```json
// eslintrc.json
{
  ...,
  "parser": "@typescript-eslint/parser",
  "plugins": [..., "migrate-to-typescript"],
  "extends": [
    ...,
    // for projects that starting/in the middle of migration to typescript
    "migrate-to-typescript/js-with-ts",
    // or
    // for projects that are fully working with typescript
    "migrate-to-typescript/ts-only",
    // or
    // for projects (mostly front-end) that written with js and using ts for type-checking or type-generating
    "migrate-to-typescript/js-only-and-ts-for-type-checking",
  ],
  ...
}
```
