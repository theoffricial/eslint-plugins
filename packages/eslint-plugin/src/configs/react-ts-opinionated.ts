import type { ESLint } from 'eslint';

const reactTsOpinionated: Partial<ESLint.ConfigData> = {
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

export = reactTsOpinionated;
