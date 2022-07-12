import type { ESLint } from 'eslint';

const jestConfig: Partial<ESLint.ConfigData> = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@uniqorg', 'react'],
    extends: ['plugin:@uniqorg/react-js-only'],
    rules: {
        // https://github.com/macinjoke/eslint-plugin-styled-components-varname
        // very opinionated rule
        // 'styled-components-varname/varname': [
        //   'off', {
        //   "tagStyle": {
        //     "prefix": 'Styled',
        //   },
        //   "extendedStyle": {
        //     "prefix": 'Styled',
        //   },
        // },
        // ],

        'react/boolean-prop-naming': [
            'warn',
            {
                rule: '^(is|are|has|will)[A-Z]([A-Za-z0-9]?)+',
                validateNested: true,
                message:
                    'It`s better if boolean prop names start with one of the following affirmative forms: "is"/"are"/"has"/"will".',
            },
        ],
        'react/default-props-match-prop-types': ['error'],
        // TODO - change message to: 'Component definition is missing a name. Having no name for the component makes it anonymous in react's error messages. To add a name, you can add `displayName: '<name>'` to the component definition.'
        'react/display-name': ['warn'],
        // change message to "Prop type `object/array` is vague. It's better to use `arrayOf` and `shape`"
        'react/forbid-prop-types': ['warn'],
        // requires definition of preferred function type
        'react/function-component-definition': ['off'],
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
