import type { ESLint } from 'eslint';

// mainly use for frontend projects
// combined with bundlers/transpiling

export const C_ESLINT_CONFIG: Partial<ESLint.ConfigData> = {
    extends: ['eslint:recommended'],
    env: {
        es6: true,
        'shared-node-browser': true,
    },
    rules: {
        'no-template-curly-in-string': 'warn',
    },
};

export const casd = (): string => {
    return 'dsd';
};
