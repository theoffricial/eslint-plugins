import type { ESLint } from 'eslint';

export const C_JEST_TS_CONFIG: Partial<ESLint.ConfigData> = {
    extends: ['plugin:@uniqorg/jest'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', '@uniqorg', 'jest'],
    rules: {
        'jest/unbound-method': [
            'error',
            {
                ignoreStatic: true,
            },
        ],
    },
    overrides: [
        {
            files: [
                '**/*.@(<your-test-files-pattern>|<your-second-pattern>|spec|test).[jt]s',
            ],
            overrides: [
                {
                    // typescript
                    files: [
                        '<your-customize-2nd-level-pattern>',
                        '**/*.ts',
                        '**/*.tsx',
                    ],
                    rules: {},
                },
            ],
        },
        {
            // javascript,
            files: [],
        },
    ],
};
