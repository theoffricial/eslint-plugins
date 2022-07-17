import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

export const C_NODE_PLUS_JEST_JS_WITH_TS_CONFIG: Partial<ESLint.ConfigData> = {
    plugins: ['@uniqorg'],
    extends: [
        'plugin:@uniqorg/es-modules-js-with-ts',
        'plugin:@uniqorg/jest-js-with-ts',
        'plugin:@uniqorg/typescript-eslint-type-checking',
        'plugin:@uniqorg/promise',
    ],
    env: {
        es6: true,
        node: true,
        jest: true,
    },
};
