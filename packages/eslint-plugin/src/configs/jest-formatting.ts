import type { ESLint } from 'eslint';

export const C_JEST_FORMATTING_CONFIG: Partial<ESLint.ConfigData> = {
    plugins: ['jest-formatting'],
    env: {
        jest: true,
    },
    rules: {
        'jest-formatting/padding-around-after-all-blocks': 'error',
        'jest-formatting/padding-around-after-each-blocks': 'error',
        'jest-formatting/padding-around-before-all-blocks': 'error',
        'jest-formatting/padding-around-before-each-blocks': 'error',
        'jest-formatting/padding-around-expect-groups': 'error',
        'jest-formatting/padding-around-describe-blocks': 'error',
        'jest-formatting/padding-around-test-blocks': 'error',
        'jest-formatting/padding-around-all': 'error',
    },
};
