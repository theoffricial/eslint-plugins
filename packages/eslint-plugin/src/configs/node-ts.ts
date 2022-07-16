import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

const nodeTsConfig: Partial<ESLint.ConfigData> = {
    plugins: ['@uniqorg'],
    extends: [
        'plugin:@uniqorg/es-modules-typescript',
        'plugin:@uniqorg/promise',
    ],
    env: {
        es6: true,
        node: true,
    },
};

export = nodeTsConfig;
