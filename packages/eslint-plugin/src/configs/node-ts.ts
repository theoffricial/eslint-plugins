import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

export const C_NODE_TS_CONFIG: Partial<ESLint.ConfigData> = {
    plugins: ['@uniqorg'],
    extends: [
        'plugin:@uniqorg/es-modules-typescript',
        'plugin:@uniqorg/typescript-eslint-with-type-checking',
        'plugin:@uniqorg/promise',
    ],
    env: {
        es6: true,
        node: true,
    },
};
