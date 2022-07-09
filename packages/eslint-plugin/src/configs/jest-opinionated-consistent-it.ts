import type { ESLint } from 'eslint';

const jestOpinionatedConsistentIt: Partial<ESLint.ConfigData> = {
    plugins: ['jest'],
    env: {
        jest: true,
    },
    rules: {
        'jest/consistent-test-it': [
            'error',
            {
                fn: 'it',
                withinDescribe: 'it',
            },
        ],
    },
};

export = jestOpinionatedConsistentIt;
