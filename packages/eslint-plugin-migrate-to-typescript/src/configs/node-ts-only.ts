import type { ESLint } from 'eslint';

const config: Partial<ESLint.ConfigData> = {
    plugins: ['migrate-to-typescript'],
    rules: {
        'migrate-to-typescript/consistent-type-imports': 'error',
        'migrate-to-typescript/no-commonjs-dynamic-require': 'error',
        'migrate-to-typescript/no-commonjs-exports': 'error',
        'migrate-to-typescript/no-commonjs-module-exports': 'error',
        'migrate-to-typescript/no-esm-dynamic-import': 'error',
        'migrate-to-typescript/no-esm-export-default': 'off',
        'migrate-to-typescript/no-require': 'error',
    },
};
export = config;
