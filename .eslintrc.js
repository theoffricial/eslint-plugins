// used by @nrwl/nx
const devkit = require('@nrwl/devkit')
/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  "root": true,
  "env": {
    "node": true,
    "jest": true,
  },
  "ignorePatterns": ["**/*"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "rules": {
        "@nrwl/nx/enforce-module-boundaries": [
          "error",
          {
            "enforceBuildableLibDependency": true,
            "allow": [],
            "depConstraints": [
              {
                "sourceTag": "*",
                "onlyDependOnLibsWithTags": ["*"]
              }
            ]
          }
        ]
      }
    },
    {
      "files": ["*.ts", "*.tsx"],
      "extends": [`${devkit.workspaceRoot}/eslintrc.base.js`],
      "rules": {}
    }
    // {
    //   "files": ["*.js", "*.jsx"],
    // //   "extends": ["plugin:@nrwl/nx/javascript"],
    //   "rules": {}
    // }
  ],
  "rules": {
      // layout
      // prettier
      "prettier/prettier": [
          "error",
          {
              "tabWidth": 4,
              "singleQuote": true,
              "printWidth": 80,
              "useTabs": false
          },
          {
              "usePrettierrc": false
          }
      ],
      "indent": "off",
      "@typescript-eslint/indent": "off",
      "function-call-argument-newline": "off",
      "max-len": "off",
      // EO layout
      // Security
      "security/detect-unsafe-regex": "error",
      "security/detect-buffer-noassert": "error",
      "security/detect-child-process": "error",
      "security/detect-disable-mustache-escape": "off",
      "security/detect-eval-with-expression": "off",
      "security/detect-no-csrf-before-method-override": "off",
      "security/detect-non-literal-fs-filename": "error",
      "security/detect-non-literal-regexp": "error",
      "security/detect-non-literal-require": "error",
      "security/detect-object-injection": "error",
      "security/detect-possible-timing-attacks": "error",
      "security/detect-pseudoRandomBytes": "off",
      "security/detect-new-buffer": "off",
      // EO Security
      // promise-plugin
      "promise/catch-or-return": "error",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",
      "promise/always-return": "error",
      "promise/no-native": "off",
      "promise/no-nesting": "error",
      "promise/no-new-statics": "error",
      "promise/no-return-in-finally": "error",
      "promise/prefer-await-to-then": "off",
      // EO promise-plugin
      // jest-plugin
      "jest/consistent-test-it": ["warn", { "fn": "it" }],
      "jest/expect-expect": "error",
      "jest/max-nested-describe": ["error", {"max": 3 }],
      "jest/no-alias-methods": "error",
      "jest/no-commented-out-tests": "error",
      "jest/no-conditional-expect": "error",
      "jest/no-conditional-in-test": "error",
      "jest/no-deprecated-functions": "error",
      "jest/no-disabled-tests": "warn",
      "jest/no-done-callback": "error",
      "jest/no-duplicate-hooks": "off",
      "jest/no-export": "error",
      "jest/no-focused-tests": "warn",
      "jest/no-hooks": "off",
      "jest/no-identical-title": "error",
      "jest/no-interpolation-in-snapshots": "off",
      "jest/no-jasmine-globals": "error",
      "jest/no-jest-import": "error",
      "jest/no-large-snapshots": "off",
      "jest/no-mocks-import": "off",
      "jest/no-restricted-matchers": "off",
      "jest/no-standalone-expect": "error",
      "jest/no-test-prefixes": "warn",
      "jest/no-test-return-statement": "error",
      "jest/prefer-called-with": "error",
      "jest/prefer-comparison-matcher": "error",
      "jest/prefer-equality-matcher": "error",
      "jest/prefer-expect-assertions": "off",
      "jest/prefer-expect-resolves": "error",
      "jest/prefer-hooks-in-order": "warn",
      "jest/prefer-hooks-on-top": "warn",
      "jest/prefer-lowercase-title": "error",
      "jest/prefer-snapshot-hint": "off",
      "jest/prefer-spy-on": "off",
      "jest/prefer-strict-equal": "error",
      "jest/prefer-to-be": "error",
      "jest/prefer-to-contain": "error",
      "jest/prefer-to-have-length": "error",
      "jest/prefer-todo": "warn",
      "jest/require-hook": "off",
      "jest/require-to-throw-message": "off",
      "jest/require-top-level-describe": "error",
      "jest/valid-describe-callback": "error",
      "jest/valid-expect": "error",
      "jest/valid-expect-in-promise": "error",
      "jest/valid-title": "error",
      "jest/unbound-method": "off",
      // EP jest-plugin
      // import-plugin
      // Static analysis
      "import/no-unresolved": ["error", { "commonjs": true, "esmodule": false, "amd": true } ],
      "import/named": "error",
      "import/default": "off",
      "import/namespace": "off",
      // VERY interesting!
      "import/no-restricted-paths": ["error", { "zones": [ 
          { 
              "target": "./src/configs", 
              "from": "./src/rules",
              "message": "[Message] CONFIGS should not be imported into RULES"
          }]} 
      ],
      "import/no-absolute-path": "error",
      "import/no-dynamic-require": "error",
      "import/no-internal-modules": ["error", { 
          "allow": [
              "**/src/rules/*.ts", 
              "**/src/configs/*.ts",
              "**/shared/*",
              "**/src/shared/types",
              "**/src/**"
          ]
      }],
      "import/no-webpack-loader-syntax": "error",
      "import/no-self-import": "error",
      "import/no-cycle": "error",
      "import/no-useless-path-segments": "error",
      "import/no-relative-parent-imports": "off", //"error",
      "import/no-relative-packages": "error",
      // Helpful warnings
      "import/export": "error",
      "import/no-named-as-default": "error",
      "import/no-named-as-default-member": "error",
      "import/no-deprecated": "warn",
      "import/no-mutable-exports": "error",
      "import/no-unused-modules": "off", // [1, {"missingExports": false, "unusedExports": false}],
      // Module systems
      "import/unambiguous": "warn",
      "import/no-commonjs": "error",
      "import/no-amd": "error",
      "import/no-nodejs-modules": "off",
      "import/no-import-module-exports": "error",
      // Style guide
      "import/first": ["error", "absolute-first"],
      "import/exports-last": "off", //"error",
      "import/no-duplicates": "error",
      "import/no-namespace": "off",
      // "import/extensions": ["error", { "ts": "never", "js": "never", "json": "always"}],
      "import/order": "error",
      "import/newline-after-import": "error",
      "import/prefer-default-export": "off",
      "import/max-dependencies": "off",
      "import/no-unassigned-import": "off",
      "import/no-named-default": "off",
      "import/no-default-export": "off",
      "import/no-named-export": "off",
      "import/no-anonymous-default-export": "off",
      "import/group-export": "off",
      "import/dynamic-import-chunkname": "off",
      // EO import-plugin
      // unicorn-plugin
      "unicorn/better-regex": "error",
      "unicorn/catch-error-name": "error",
      "unicorn/consistent-destructuring": "error",
      "unicorn/consistent-function-scoping": "error",
      "unicorn/custom-error-definition": "error",
      "unicorn/empty-brace-spaces": "error",
      "unicorn/error-message": "error",
      "unicorn/escape-case": "error",
      "unicorn/expiring-todo-comments": "error",
      "unicorn/explicit-length-check": "error",
      "unicorn/filename-case": ["error", { "case": "kebabCase" }],
      "unicorn/import-index": "error",
      "unicorn/import-style": "off",
      "unicorn/new-for-builtins": "error",
      "unicorn/no-abusive-eslint-disable": "off",
      "unicorn/no-array-callback-reference": "error",
      "unicorn/no-array-for-each": "error",
      "unicorn/no-array-method-this-argument": "error",
      "unicorn/no-array-push-push": "error",
      "unicorn/no-array-reduce": "off",
      "unicorn/no-await-expression-member": "off",
      "unicorn/no-console-spaces": "error",
      "unicorn/no-document-cookie": "off",
      "unicorn/no-empty-file": "off",
      "unicorn/no-for-loop": "warn",
      "unicorn/no-hex-escape": "error",
      "unicorn/no-instanceof-array": "error",
      "unicorn/no-invalid-remove-event-listener": "error",
      "unicorn/no-keyword-prefix": "off",
      "unicorn/no-lonely-if": "error",
      "unicorn/no-nested-ternary": "error",
      "unicorn/no-new-array": "off",
      "unicorn/no-new-buffer": "off",
      "unicorn/no-null": "off",
      "unicorn/no-object-as-default-parameter": "off",
      "unicorn/no-process-exit": "error",
      "unicorn/no-static-only-class": "error",
      "unicorn/no-thenable": "off",
      "unicorn/no-this-assignment": "off",
      "unicorn/no-unreadable-array-destructuring": "error",
      "unicorn/no-unreadable-iife": "error",
      "unicorn/no-unsafe-regex": "error",
      "unicorn/no-unused-properties": "error",
      "unicorn/no-useless-fallback-in-spread": "error",
      "unicorn/no-useless-length-check": "error",
      "unicorn/no-useless-promise-resolve-reject": "error",
      "unicorn/no-useless-spread": "error",
      "unicorn/no-useless-switch-case": "error",
      "unicorn/no-useless-undefined": "error",
      "unicorn/no-zero-fractions": "error",
      "unicorn/number-literal-case": "off",
      "unicorn/numeric-separators-style": "error",
      "unicorn/prefer-add-event-listener": "off",
      "unicorn/prefer-array-find": "error",
      "unicorn/prefer-array-flat": "error",
      "unicorn/prefer-array-flat-map": "error",
      "unicorn/prefer-array-index-of": "error",
      "unicorn/prefer-array-some": "error",
      "unicorn/prefer-at": ["off", {"checkAllIndexAccess": true }],
      "unicorn/prefer-code-point": "off",
      "unicorn/prefer-date-now": "error",
      "unicorn/prefer-default-parameters": "off",
      "unicorn/prefer-dom-node-append": "off",
      "unicorn/prefer-dom-node-dataset": "off",
      "unicorn/prefer-dom-node-remove": "off",
      "unicorn/prefer-dom-node-text-content": "off",
      "unicorn/prefer-export-from": "error",
      "unicorn/prefer-includes": "error",
      "unicorn/prefer-json-parse-buffer": "error",
      "unicorn/prefer-keyboard-event-key": "off",
      "unicorn/prefer-math-trunc": "error",
      "unicorn/prefer-modern-dom-apis": "off",
      "unicorn/prefer-modern-math-apis": "error",
      "unicorn/prefer-module": "off",
      "unicorn/prefer-native-coercion-functions": "error",
      "unicorn/prefer-negative-index": "off",
      "unicorn/prefer-node-protocol": "error",
      "unicorn/prefer-number-properties": "error",
      "unicorn/prefer-object-from-entries": "error",
      "unicorn/prefer-optional-catch-binding": "error",
      "unicorn/prefer-prototype-methods": "error",
      "unicorn/prefer-query-selector": "off",
      "unicorn/prefer-reflect-apply": "error",
      "unicorn/prefer-regexp-test": "error",
      "unicorn/prefer-set-has": "error",
      "unicorn/prefer-spread": "error",
      "unicorn/prefer-string-replace-all": "error",
      "unicorn/prefer-string-slice": "error",
      "unicorn/prefer-string-starts-ends-with": "error",
      "unicorn/prefer-string-trim-start-end": "error",
      "unicorn/prefer-switch": "off",
      "unicorn/prefer-ternary": "off",
      "unicorn/prefer-top-level-await": "off",
      "unicorn/prefer-type-error": "error",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/relative-url-style": "error",
      "unicorn/require-array-join-separator": "error",
      "unicorn/require-number-to-fixed-digits-argument": "error",
      "unicorn/require-post-message-target-origin": "off",
      "unicorn/string-content": "error",
      "unicorn/template-indent": "error",
      "unicorn/text-encoding-identifier-case": "error",
      "unicorn/throw-new-error": "error",
      // EO unicorn-plugin
      "no-lonely-if": "error",
      // typescript-eslint-rules - Supported Rules
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": [
          "error",
          {
              "default": "array"
          }
      ],
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/ban-ts-comment": [
          "error",
          {
              "minimumDescriptionLength": 10,
              "ts-expect-error": "allow-with-description",
              "ts-check": "allow-with-description",
              "ts-ignore": true,
              "ts-nocheck": true
          }
      ],
      "@typescript-eslint/ban-tslint-comment": "error",
      "@typescript-eslint/ban-types": [
          "error",
          {
              "types": {},
              "extendDefaults": true
          }
      ],
      "@typescript-eslint/class-literal-property-style": [
          "error",
          "getters"
      ],
      "@typescript-eslint/consistent-indexed-object-style": [
          "error",
          "index-signature"
      ],
      "@typescript-eslint/consistent-type-assertions": [
          "error",
          {
              "assertionStyle": "as",
              "objectLiteralTypeAssertions": "never"
          }
      ],
      "@typescript-eslint/consistent-type-definitions": [
          "off"
      ],
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": [
          "error",
          {
              "prefer": "type-imports"
          }
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
              "accessibility": "explicit"
          }
      ],
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/member-delimiter-style": "error",
      "@typescript-eslint/member-ordering": "error",
      "@typescript-eslint/method-signature-style": [
          "error",
          "method"
      ],
      "@typescript-eslint/naming-convention": [
          "error",
          {
              "format": [
                  "camelCase",
                  "UPPER_CASE"
              ],
              "selector": [
                  "variable"
              ]
          },
          // for consts that behave like exported enums/constants
          {
              "format": [
                  "UPPER_CASE",
                  "StrictPascalCase"
              ],
              "selector": [
                  "variable"
              ],
              "modifiers": [
                  // const & exported
                  "const",
                  "exported"
              ],
              "prefix": [
                  // Const Enum
                  "CE",
                  "C"
              ]
          },
          {
              "format": [
                  "camelCase",
                  "PascalCase"
              ],
              "selector": [
                  "variable"
              ],
              "modifiers": [
                  // const & exported
                  "const",
                  "exported"
              ],
              "types": [
                  "function"
              ]
          },
          {
              "format": [
                  "camelCase"
              ],
              "filter": {
                  "match": false,
                  "regex": "^_*"
              },
              "selector": [
                  "function",
                  "parameter",
                  "classProperty"
              ]
          },
          {
              "format": [
                  "strictCamelCase",
                  // for cases where generating object as enum workaround
                  "PascalCase"
              ],
              // allow snake-case with chars: "- or @ or /" e.g. "a-@b-/c"
              // used for the eslint rules, which using the convention as standard
              "filter": {
                  "match": false,
                  "regex": "^[\\w\\-@\\/]*$"
              },
              "selector": [
                  "objectLiteralProperty"
              ]
          },
          {
              "format": [
                  "PascalCase"
              ],
              "selector": [
                  "interface"
              ],
              "prefix": [
                  "I"
              ]
          },
          {
              "format": [
                  "PascalCase"
              ],
              "selector": [
                  "typeAlias"
              ],
              "prefix": [
                  "T"
              ]
          },
          {
              "format": [
                  "PascalCase"
              ],
              "selector": [
                  "enum"
              ],
              "prefix": [
                  "E"
              ]
          }
      ],
      "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/no-confusing-non-null-assertion": "error",
      "@typescript-eslint/no-confusing-void-expression": [
          "error",
          {
              "ignoreArrowShorthand": true,
              "ignoreVoidOperator": false
          }
      ],
      "@typescript-eslint/no-duplicate-enum-values": "error",
      "@typescript-eslint/no-dynamic-delete": "error",
      "@typescript-eslint/no-empty-interface": "off",
      // related to common usages of "any" maybe turn off
      "@typescript-eslint/no-explicit-any": [
          "error",
          {
              "fixToUnknown": true
          }
      ],
      // related to common usages of "any" maybe turn off
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      "@typescript-eslint/no-extraneous-class": "off",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/no-for-in-array": "error",
      "@typescript-eslint/no-inferrable-types": [
          "error",
          {
              "ignoreParameters": true,
              "ignoreProperties": true
          }
      ],
      "@typescript-eslint/no-invalid-void-type": "off",
      "@typescript-eslint/no-meaningless-void-operator": "error",
      "@typescript-eslint/no-misused-new": "error",
      // namespace & module keywords related rule
      "@typescript-eslint/no-namespace": "error",
      // namespace & module keywords related rule
      "@typescript-eslint/prefer-namespace-keyword": "off",
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
      // TS3.7 or greater operator is not supported
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      // TS3.7 or greater operator is not supported
      "@typescript-eslint/non-nullable-type-assertion-style": "off",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-parameter-properties": "off",
      "@typescript-eslint/parameter-properties": "off",
      "@typescript-eslint/no-redundant-type-constituents": "error",
      // esm/commonjs
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-type-alias": "off",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
      // might cause issues with eslint tree (not )
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/no-unnecessary-qualifier": "off",
      "@typescript-eslint/no-unnecessary-type-arguments": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "error",
      // safe-guards
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-literal-enum-member": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/prefer-readonly-parameter-types": "off",
      "@typescript-eslint/prefer-reduce-type-parameter": "error",
      // regex
      "@typescript-eslint/prefer-regexp-exec": "error",
      // class and method chaining
      "@typescript-eslint/prefer-return-this-type": "error",
      "@typescript-eslint/prefer-string-starts-ends-with": "error",
      // ts compiler
      "@typescript-eslint/prefer-ts-expect-error": "error",
      // promises
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/require-array-sort-compare": [
          "error",
          {
              "ignoreStringArrays": true
          }
      ],
      "@typescript-eslint/restrict-plus-operands": "error",
      "@typescript-eslint/restrict-template-expressions": [
          "error",
          {
              "allowNumber": true,
              "allowBoolean": false,
              "allowAny": false,
              "allowNullish": false,
              "allowRegExp": false
          }
      ],
      "@typescript-eslint/sort-type-union-intersection-members": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "no-extra-boolean-cast": "off",
      "@typescript-eslint/switch-exhaustiveness-check": "off",
      "@typescript-eslint/triple-slash-reference": [
          "error",
          {
              "path": "never",
              "types": "prefer-import",
              "lib": "never"
          }
      ],
      "@typescript-eslint/type-annotation-spacing": "error",
      "@typescript-eslint/typedef": "error",
      "@typescript-eslint/unbound-method": [
          "error",
          {
              "ignoreStatic": true
          }
      ],
      "@typescript-eslint/unified-signatures": "error",
      // styling rules + extension rules
      "brace-style": "off",
      "@typescript-eslint/brace-style": "error",
      "comma-dangle": "off",
      "@typescript-eslint/comma-dangle": [
          "error",
          {
              "arrays": "only-multiline",
              "objects": "only-multiline",
              "imports": "only-multiline",
              "exports": "only-multiline",
              "functions": "never",
              "enums": "always",
              "generics": "never",
              "tuples": "never"
          }
      ],
      "comma-spacing": "off",
      "comma-style": [
          "error",
          "last"
      ],
      "@typescript-eslint/comma-spacing": "error",
      "default-param-last": "off",
      "@typescript-eslint/default-param-last": "error",
      "dot-notation": "off",
      "@typescript-eslint/dot-notation": "error",
      "func-call-spacing": "off",
      "@typescript-eslint/func-call-spacing": "error",
      "init-declarations": "off",
      "@typescript-eslint/init-declarations": [
          "error"
      ],
      "keyword-spacing": "off",
      "@typescript-eslint/keyword-spacing": "error",
      "lines-between-class-members": "off",
      "@typescript-eslint/lines-between-class-members": [
          "error",
          {
              "exceptAfterOverload": true
          }
      ],
      "no-array-constructor": "off",
      "@typescript-eslint/no-array-constructor": "error",
      "no-dupe-class-members": "off",
      "@typescript-eslint/no-dupe-class-members": "error",
      "no-duplicate-imports": "off",
      "@typescript-eslint/no-duplicate-imports": "off",
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": "error",
      "no-extra-parens": "off",
      "@typescript-eslint/no-extra-parens": "off",
      "no-extra-semi": "off",
      "@typescript-eslint/no-extra-semi": "error",
      "no-implied-eval": "off",
      "@typescript-eslint/no-implied-eval": "error",
      "no-invalid-this": "off",
      "@typescript-eslint/no-invalid-this": "error",
      "no-loop-func": "off",
      "@typescript-eslint/no-loop-func": "error",
      "no-loss-of-precision": "off",
      "@typescript-eslint/no-loss-of-precision": "error",
      "no-magic-numbers": "off",
      "@typescript-eslint/no-magic-numbers": [
          "error",
          {
              "ignore": [-1, 0, 1],
              "ignoreEnums": true,
              "ignoreNumericLiteralTypes": true,
              "ignoreArrayIndexes": true,
              "ignoreDefaultValues": true
          }
      ],
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": "error",
      "no-restricted-imports": "off",
      "@typescript-eslint/no-restricted-imports": "off",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": [
          "error",
          {
              "hoist": "all"
          }
      ],
      "no-throw-literal": "off",
      "@typescript-eslint/no-throw-literal": "error",
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
          "error",
          {
              "argsIgnorePattern": "^_",
              // add extra pattern like "_ignore"
              "destructuredArrayIgnorePattern": "^_",
              "caughtErrors": "none"
          }
      ],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [
          "error",
          {
              "enums": false,
              "typedefs": false,
              "classes": false,
              "functions": false,
              "variables": true
          }
      ],
      "no-useless-constructor": "off",
      "@typescript-eslint/no-useless-constructor": "error",
      "object-curly-spacing": "off",
      "@typescript-eslint/object-curly-spacing": [
          "error",
          "always"
      ],
      "padding-line-between-statements": "off",
      "@typescript-eslint/padding-line-between-statements": [
          "error",
          {
              "blankLine": "always",
              "prev": "*",
              "next": [
                  "interface",
                  "type"
              ]
          }
      ],
      "quotes": "off",
      "@typescript-eslint/quotes": "off",
      // promise
      "require-await": "off",
      "@typescript-eslint/require-await": "error",
      "no-return-await": "off",
      "@typescript-eslint/return-await": "error",
      "semi": "off",
      "@typescript-eslint/semi": "error",
      "space-before-blocks": "off",
      "@typescript-eslint/space-before-blocks": "error",
      "space-before-function-paren": "off",
      "@typescript-eslint/space-before-function-paren": "off",
      "space-infix-ops": "off",
      "@typescript-eslint/space-infix-ops": "error"
  }
}
