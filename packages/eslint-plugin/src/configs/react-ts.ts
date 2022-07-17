import type { ESLint } from 'eslint';

const reactTs: Partial<ESLint.ConfigData> = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@uniqorg'],
    extends: ['plugin:@uniqorg/react-js', '?'],
    settings: {
        react: {
            version: 'detect',
        },
    },
};

export = reactTs;
