import type { ESLint } from 'eslint';

const jestOpinionatedMaxNestedDescribeConfig: Partial<ESLint.ConfigData> = {
    plugins: ['jest', 'jest-formatting'],
    env: {
        jest: true,
    },
    rules: {
        'jest/max-nested-describe': [
            'error',
            {
                max: 3,
            },
        ],
    },
};

export = jestOpinionatedMaxNestedDescribeConfig;
