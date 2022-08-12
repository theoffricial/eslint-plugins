import type { ESLint } from 'eslint';

export const C_REACT_PLUS_JEST_JS: Partial<ESLint.ConfigData> = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es6: true,
    },
    plugins: ['@uniqorg', 'react'],
    extends: ['./react-js', './jest'],
    settings: {
        react: {
            version: 'detect',
        },
    },
};
