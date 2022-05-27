/** @type {Pick<import('@typescript-eslint/utils/dist/ts-eslint').RuleTesterConfig, 'overrides' | 'rules' | 'parser' | 'extends' | 'plugins' | 'globals' | 'settings'>} */
const self = {
    parser: '@typescript-eslint/parser',
    extends: [],
    globals: {},
    overrides: [],
    plugins: [
        "@typescript-eslint",
        "import",
        "unicorn"
    ],
    rules: {
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
            {
                "format": [
                    "camelCase"
                ],
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
        "@typescript-eslint/no-base-to-string": "error"
    }
}

module.exports = self;