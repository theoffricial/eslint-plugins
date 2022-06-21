---
sidebar_position: 1
displayed_sidebar: "migrate2typescriptSidebar"
---

# Tutorial Intro

Let's discover `eslint-plugin-migrate-to-typescript` in **less than 5 minutes**.

## Getting Started

Get started by **install plugin in your project**.

with `npm`

```sh
# eslint-plugins depends on (peer-deps) your
# project to have eslint and @typescript-eslint/parser
npm install --save-dev eslint @typescript-eslint/parser
npm install --save-dev eslint-plugin-migrate-to-typescript
```

Or with `yarn`

```sh
yarn add -D eslint @typescript-eslint/parser
yarn add -D eslint-plugin-migrate-to-typescript
```

### What you'll need

- Using `@typescript-eslint/parser` as your `eslint` parser.
- depends on [Node.js](https://nodejs.org/en/download/), supported versions for `@typescript-eslint/parser` are:

```json
// from @typescript-eslint/parser 5.x.x package.json
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
