import type { ESLint } from 'eslint';

export const C_REACT_PLUS_JEST_TS: Partial<ESLint.ConfigData> = {
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
        './react-js',
        './esm-typescript',
        './typescript-eslint-with-type-checking',
        './promise',
        './jest-typescript',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
};
