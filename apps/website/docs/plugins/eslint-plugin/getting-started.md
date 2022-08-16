---
sidebar_position: 1
displayed_sidebar: "eslintPluginSideBar"
---

# Getting Started

In 4 minutes ⏰ you will start using the `eslint-plugin` plugin

## Installation

with `npm`:

```sh
# eslint-plugin has peer-dependencies that must be installed together with it
# install peer-deps
npm install --save-dev eslint
# then install the plugin
npm install --save-dev  @uniqorg/eslint-plugin
```

with `yarn`:

```sh
# install peer-deps
yarn add -D eslint
# then install the plugin
yarn add -D @uniqorg/eslint-plugin
```

## Configuration & Usage

with `json`:

```json
// .eslintrc.json
{
  ...,
  "plugins": ["@uniqorg"],
  "extends": ["plugin:@uniqorg/esm-typescript", "plugin:@uniqorg/jest-for-typescript"] // example configs
  ...
}
```

And in `YAML`:

```yaml
---
# .eslintrc.yaml
plugins:
  - @uniqorg
extends:
  - "plugin:@uniqorg/esm-typescript" # example config
  - "plugin:@uniqorg/jest-for-typescript" # example config
```

###### For the full `eslint` configuration files format see eslint eslint's official document - [Configuration Files](https://eslint.org/docs/latest/user-guide/configuring/configuration-files).



## Configs
See the **[Configs Table](./configs/index.md)**


