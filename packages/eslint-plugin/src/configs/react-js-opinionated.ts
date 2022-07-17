import type { ESLint } from 'eslint';

const reactJsOpinionated: Partial<ESLint.ConfigData> = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@uniqorg', 'react', 'react-hooks'],
    extends: ['plugin:@uniqorg/react-js'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/boolean-prop-naming': [
            'warn',
            {
                rule: '^(is|are|has|will|should|did)[A-Z]([A-Za-z0-9]?)+',
                validateNested: true,
                message:
                    'It`s better if boolean prop names start with one of the following affirmative forms: "is"/"are"/"has"/"will"/"should"/"did".',
            },
        ],
        'react/default-props-match-prop-types': ['error'],
        'react/no-multi-comp': [
            'error',
            {
                ignoreStateless: true,
            },
        ],
        'react/prefer-es6-class': ['warn'],
        'react/prefer-stateless-function': ['warn'],
        'react/sort-comp': ['warn'],
        'react/jsx-boolean-value': ['error'],
        // collides with prettier
        'react/jsx-closing-bracket-location': ['error'],
        // collides with prettier
        'react/jsx-closing-tag-location': ['error'],
        // collides with prettier
        'react/jsx-curly-spacing': ['error'],
        // collides with prettier
        'react/jsx-curly-newline': ['error'],
        // collides with prettier
        'react/jsx-equals-spacing': ['error', 'never'],
        // collides with prettier
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

export = reactJsOpinionated;
