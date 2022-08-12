import type { ESLint } from 'eslint';

export const C_REACT_JS_OPINIONATED: Partial<ESLint.ConfigData> = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es6: true,
    },
    plugins: ['react'],
    extends: [],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // TODO - create a configs for these rules
        // 'react/boolean-prop-naming': [
        //     'warn',
        //     {
        //         rule: '^(is|are|has|will|should|did)[A-Z]([A-Za-z0-9]?)+',
        //         validateNested: true,
        //         message:
        //             'It`s better if boolean prop names start with one of the following affirmative forms: "is"/"are"/"has"/"will"/"should"/"did".',
        //     },
        // ],
        // 'react/default-props-match-prop-types': ['error'],
        // 'react/no-multi-comp': [
        //     'error',
        //     {
        //         ignoreStateless: true,
        //     },
        // ],
        // 'react/prefer-es6-class': ['warn'],
        // 'react/sort-comp': ['warn'],
        'react/jsx-boolean-value': ['error'],
        'react/jsx-closing-bracket-location': ['error'],
        'react/jsx-closing-tag-location': ['error'],
        'react/jsx-curly-spacing': ['error'],
        'react/jsx-curly-newline': ['error'],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-first-prop-new-line': ['error'],
        'react/jsx-one-expression-per-line': ['error'],
        'react/jsx-pascal-case': ['error'],
        'react/jsx-sort-props': [
            'warn',
            {
                callbacksLast: true,
                shorthandFirst: true,
                multiline: 'last',
                ignoreCase: true,
            },
        ],
    },
};
