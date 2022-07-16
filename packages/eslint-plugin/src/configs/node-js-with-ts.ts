import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

const nodeJsWithTsConfig: Partial<ESLint.ConfigData> = {
    plugins: ['@uniqorg'],
    extends: [
        'plugin:@uniqorg/es-modules-js-with-ts',
        'plugin:@uniqorg/promise',
    ],
    parser: '@typescript-eslint/parser',
    env: {
        es6: true,
        node: true,
    },
};

export = nodeJsWithTsConfig;
