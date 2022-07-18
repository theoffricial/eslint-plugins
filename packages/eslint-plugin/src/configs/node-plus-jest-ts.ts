import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

export const C_NODE_PLUS_JEST_TS_CONFIG: Partial<ESLint.ConfigData> = {
    plugins: ['@uniqorg'],
    extends: [
        'plugin:@uniqorg/typescript-eslint-with-type-checking',
        'plugin:@uniqorg/jest-typescript',
        'plugin:@uniqorg/es-modules-typescript',
    ],
    env: {
        es6: true,
        node: true,
        jest: true,
    },
};
