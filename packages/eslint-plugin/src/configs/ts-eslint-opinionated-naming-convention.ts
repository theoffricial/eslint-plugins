import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

export const C_TS_ESLINT_OPINIONATED_NAMING_CONVENTION_CONFIG: Partial<ESLint.ConfigData> =
    {
        plugins: ['@typescript-eslint'],
        extends: ['plugin:@uniqorg/typescript-eslint'],
        parser: '@typescript-eslint/parser',
        env: {
            es6: true,
            'shared-node-browser': true,
        },
        rules: {
            // https://typescript-eslint.io/rules/naming-convention
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    format: ['camelCase', 'UPPER_CASE'],
                    selector: ['variable'],
                },
                // for consts that behave like exported enums/constants
                {
                    format: ['UPPER_CASE', 'PascalCase'],
                    selector: ['variable'],
                    modifiers: [
                        // const & exported
                        'const',
                        'exported',
                    ],
                    prefix: [
                        // Const Enum
                        'C_',
                        'CE_',
                    ],
                },
                {
                    format: ['camelCase', 'PascalCase'],
                    selector: ['variable'],
                    modifiers: [
                        // const & exported
                        'const',
                        'exported',
                    ],
                    types: ['function'],
                },
                {
                    format: ['camelCase'],
                    filter: {
                        match: false,
                        regex: '^_*',
                    },
                    selector: ['function', 'parameter', 'classProperty'],
                },
                {
                    format: [
                        'camelCase',
                        // for cases where generating object as enum workaround
                        'PascalCase',
                    ],
                    // allow snake-case with chars: "- or @ or /" e.g. "a-@b-/c"
                    // used for the eslint rules, which using the convention as standard
                    filter: {
                        match: false,
                        regex: '^[\\w\\-@\\/]*$',
                    },
                    selector: ['objectLiteralProperty'],
                },
                {
                    format: ['PascalCase'],
                    selector: ['interface'],
                    prefix: ['I'],
                },
                {
                    format: ['PascalCase'],
                    selector: ['typeAlias'],
                    prefix: ['T'],
                },
                {
                    format: ['PascalCase'],
                    selector: ['enum'],
                    prefix: ['E'],
                },
            ],
        },
    };
