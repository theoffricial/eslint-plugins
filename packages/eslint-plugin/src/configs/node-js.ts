import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

const nodeJsCommonJsConfig: Partial<ESLint.ConfigData> = {
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

export = nodeJsCommonJsConfig;
