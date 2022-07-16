import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

const nodePlusJestTsConfig: Partial<ESLint.ConfigData> = {
    plugins: ['@uniqorg'],
    extends: [
        'plugin:@uniqorg/es-modules-typescript',
        'plugin:@uniqorg/jest-typescript',
    ],
    env: {
        es6: true,
        node: true,
        jest: true,
    },
};

export = nodePlusJestTsConfig;
