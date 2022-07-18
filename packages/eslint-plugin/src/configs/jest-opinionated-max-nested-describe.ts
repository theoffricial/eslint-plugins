import type { ESLint } from 'eslint';

// for now, do not use...
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
