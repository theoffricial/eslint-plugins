import type { ESLint } from 'eslint';

const reactJsWithTsOpinionated: Partial<ESLint.ConfigData> = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@uniqorg'],
    extends: ['plugin:@uniqorg/react-js-opinionated', '?'],
    settings: {
        react: {
            version: 'detect',
        },
    },
};

export = reactJsWithTsOpinionated;
