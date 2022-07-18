import type { ESLint } from 'eslint';

export const C_REACT_PLUS_JEST_JS_WITH_TS: Partial<ESLint.ConfigData> = {
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
        './es-modules-js-with-ts',
        './typescript-eslint',
        './promise',
        './jest-js-with-ts',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
};
