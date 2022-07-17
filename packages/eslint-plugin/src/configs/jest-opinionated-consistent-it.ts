import type { ESLint } from 'eslint';

export const C_JEST_OPINIONATED_CONSISTENT_IT_CONFIG: Partial<ESLint.ConfigData> =
    {
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
