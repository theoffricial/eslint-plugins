import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

const nodePlusJestJsConfig: Partial<ESLint.ConfigData> = {
    plugins: ['@uniqorg'],
    extends: [
        'plugin:@uniqorg/es-modules-javascript',
        'plugin:@uniqorg/jest-javascript',
    ],
    env: {
        es6: true,
        node: true,
        jest: true,
    },
};

export = nodePlusJestJsConfig;
