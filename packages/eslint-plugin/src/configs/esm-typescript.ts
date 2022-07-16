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
        'import/extensions': ['.ts', '.tsx'],
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
            },
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        'import/extensions': [
            'error',
            {
                js: 'always',
                jsx: 'always',
                tsx: 'never',
                ts: 'never',
            },
        ],
        // migrate-to-typescript
        'migrate-to-typescript/no-commonjs-exports': 'error',
        'migrate-to-typescript/no-commonjs-module-exports': 'error',
        'migrate-to-typescript/no-commonjs-require': 'error',
        'migrate-to-typescript/no-esm-export-default': 'off',
    },
};

export = esModulesJsWithTsConfig;
