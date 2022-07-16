import type { ESLint } from 'eslint';

const jestOpinionatedConsistentTestConfig: Partial<ESLint.ConfigData> = {
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

export = jestOpinionatedConsistentTestConfig;
