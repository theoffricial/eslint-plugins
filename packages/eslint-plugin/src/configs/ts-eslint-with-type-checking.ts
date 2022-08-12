import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

export const C_TS_ESLINT_WITH_TYPE_CHECKING_CONFIG: Partial<ESLint.ConfigData> =
    {
        plugins: ['@typescript-eslint'],
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ],
        // https://typescript-eslint.io/docs/linting/type-linting/
        // https://typescript-eslint.io/docs/linting/monorepo/
        parserOptions: {
            tsconfigRootDir: __dirname,
        },
        env: {
            es6: true,
            'shared-node-browser': true,
        },
        parser: '@typescript-eslint/parser',
    };
