import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

export const C_NODE_JS_WITH_TS_CONFIG: Partial<ESLint.ConfigData> = {
    plugins: ['@uniqorg'],
    extends: [
        'plugin:@uniqorg/es-modules-js-with-ts',
        'plugin:@uniqorg/typescript-eslint',
        'plugin:@uniqorg/promise',
    ],
    parser: '@typescript-eslint/parser',
    env: {
        es6: true,
        node: true,
    },
};
