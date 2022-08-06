import type { ESLint } from 'eslint';

export const C_REACT_TS_OPINIONATED: Partial<ESLint.ConfigData> = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es6: true,
    },
    plugins: ['@uniqorg'],
    extends: [
        './react-js-opinionated-jsx',
        './es-modules-typescript',
        './typescript-eslint-with-type-checking',
        './promise',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
};
