import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

const nodePlusJestJsWithTsConfig: Partial<ESLint.ConfigData> = {
    plugins: ['@uniqorg'],
    extends: [
        'plugin:@uniqorg/es-modules-js-with-ts',
        'plugin:@uniqorg/jest-js-with-ts',
    ],
    env: {
        es6: true,
        node: true,
        jest: true,
    },
};

export = nodePlusJestJsWithTsConfig;
