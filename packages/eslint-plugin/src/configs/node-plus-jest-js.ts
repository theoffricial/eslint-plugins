import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

export const C_NODE_PLUS_JEST_JS_CONFIG: Partial<ESLint.ConfigData> = {
    plugins: ['@uniqorg'],
    extends: [
        'plugin:@uniqorg/es-modules-javascript',
        'plugin:@uniqorg/jest-javascript',
        'plugin:@uniqorg/promise',
    ],
    env: {
        es6: true,
        node: true,
        jest: true,
    },
};
