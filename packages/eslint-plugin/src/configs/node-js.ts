import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

export const C_NODE_JS_COMMONJS_CONFIG: Partial<ESLint.ConfigData> = {
    plugins: ['@uniqorg'],
    extends: [
        'plugin:@uniqorg/es-modules-javascript',
        'plugin:@uniqorg/promise',
    ],
    env: {
        node: true,
        commonjs: true,
        es6: true,
    },
};
