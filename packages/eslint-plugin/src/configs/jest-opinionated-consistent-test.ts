import type { ESLint } from 'eslint';

const jestOpinionatedConsistentTest: Partial<ESLint.ConfigData> = {
    plugins: ['jest'],
    env: {
        jest: true,
    },
    rules: {
        'jest/consistent-test-it': [
            'error',
            {
                fn: 'test',
                withinDescribe: 'test',
            },
        ],
    },
};

export = jestOpinionatedConsistentTest;
