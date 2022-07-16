import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

const esModulesJsWithTsConfig: Partial<ESLint.ConfigData> = {
    plugins: ['import', 'unicorn', 'migrate-to-typescript'],
    extends: ['plugin:@uniqorg/es-modules-javascript'],
    env: {
        es6: true,
        'shared-node-browser': true,
    },
    settings: {
        // verify these
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        'import/extensions': [
            'error',
            {
                js: 'never',
                jsx: 'never',
                tsx: 'never',
                ts: 'never',
            },
        ],
        'migrate-to-typescript/no-commonjs-exports': 'warn',
        'migrate-to-typescript/no-commonjs-module-exports': 'warn',
        'migrate-to-typescript/no-commonjs-require': 'warn',
        'migrate-to-typescript/no-esm-export-default': 'warn',
    },
};

export = esModulesJsWithTsConfig;
