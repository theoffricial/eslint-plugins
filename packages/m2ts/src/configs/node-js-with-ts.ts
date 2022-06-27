import type { ESLint } from 'eslint';

const config: Partial<ESLint.ConfigData> = {
    plugins: ['migrate-to-typescript'],
    rules: {
        'migrate-to-typescript/consistent-type-imports': 'warn',
        'migrate-to-typescript/no-commonjs-dynamic-require': 'warn',
        'migrate-to-typescript/no-commonjs-exports': 'warn',
        'migrate-to-typescript/no-commonjs-module-exports': 'warn',
        'migrate-to-typescript/no-esm-dynamic-import': 'warn',
        'migrate-to-typescript/no-esm-export-default': 'warn',
        'migrate-to-typescript/no-require': 'warn',
    },
};
export = config;
