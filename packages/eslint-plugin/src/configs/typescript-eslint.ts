import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

const eslintConfig: Partial<ESLint.ConfigData> = {
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    env: {
        es6: true,
        'shared-node-browser': true,
    },
    parser: '@typescript-eslint/parser',
    rules: {},
};

export = eslintConfig;
