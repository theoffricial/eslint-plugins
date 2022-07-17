import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

export const C_PROMISE_CONFIG: Partial<ESLint.ConfigData> = {
    plugins: ['promise'],
    extends: ['plugin:promise/recommended'],
    env: {
        es6: true,
        node: true,
    },
    rules: {
        'no-promise-executor-return': 'error',
        'promise/no-native': 'off',
    },
};
