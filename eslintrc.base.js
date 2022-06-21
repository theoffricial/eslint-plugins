// this is the basic eslintrc for the workspace
// it is important to use the `devkit` because "nx" executing the commands somewhere 
// in the node_modules and the relative path will be broken without it
// used by @nrwl/nx
const devkit = require('@nrwl/devkit')

/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      "ecmaVersion": 2022,
      "sourceType": "module",
      "tsconfigRootDir": devkit.workspaceRoot
    },
    "extends": [
      "eslint:recommended",
      // eslint-config-prettier lib, turns off rules that conflicts with prettier
      "prettier"
    ],
    "root": true,
    "plugins": [
      "@nrwl/nx",
      "@typescript-eslint",
      "import",
      "unicorn",
      "prettier",
      "promise",
      "jest",
      "security"
    ],
    "settings": {
      //   "import/extensions": [
      //       ".js"
      //       // ".ts"
      //   ],
      //   "import/resolver": {
      //       "node": {
      //           "extensions": [
      //               ".js"
      //               // ".ts"
      //           ]
      //       }
      //   },
      //   "import/docstyle": ["jsdoc"],
      //   "import/ignore": ["node_modules", "build"]
    },
}