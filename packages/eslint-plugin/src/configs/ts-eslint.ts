import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

export const C_TS_ESLINT_CONFIG: Partial<ESLint.ConfigData> = {
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    env: {
        es6: true,
        'shared-node-browser': true,
    },
    parser: '@typescript-eslint/parser',
    rules: {},
};
