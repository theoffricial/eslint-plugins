import type { ESLint } from 'eslint';

export const C_REACT_JS_WITH_TS_OPINIONATED: Partial<ESLint.ConfigData> = {
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
        './es-modules-js-with-ts',
        './typescript-eslint',
        './promise',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
};
