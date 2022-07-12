import type { ESLint } from 'eslint';

const jestConfig: Partial<ESLint.ConfigData> = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        'react/default-props-match-prop-types': ['error'],
        'react/no-invalid-html-attribute': ['warn'],
        'react/no-access-state-in-setstate': ['error'],
        'react/no-array-index-key': ['error'],
        'react/no-children-prop': ['error'],
        'react/no-danger': ['warn'],
        'react/no-danger-with-children': ['error'],
        'react/no-deprecated': [], // need to configure react version: detect
        'react/no-direct-mutation-state': ['error'],
        'react/no-find-dom-node': ['warn'],
        'react/no-is-mounted': ['error'],
        'react/no-string-refs': ['error'],
        'react/no-render-return-value': ['error'],
        'react/no-this-in-sfc': ['error'],
        'react/no-typos': ['error'],
        'react/no-unescaped-entities': ['warn', { forbid: ['>', '}'] }],
        'react/no-unknown-property': ['error'],
        'react/no-unsafe': ['warn'],
        'react/no-unstable-nested-components': ['warn'],
        // might collide with eslint's no-unused-vars rule
        'react/no-unused-class-component-methods': ['error'],
        // might collide with eslint's no-unused-vars rule, but only in class components
        'react/no-unused-state': ['error'],
        'react/no-will-update-set-state': ['error'],
        'react/prop-types': ['error'],
        'react/react-in-jsx-scope': ['error'], // not sure about this one
        'react/require-render-return': ['error'],
        'react/self-closing-comp': ['error'],
        'react/void-dom-elements-no-children': ['error'],
        // collides with prettier
        'react/jsx-indent': ['error'],
        // collides with prettier
        'react/jsx-indent-props': ['error'],
        'react/jsx-key': ['error'],
        // collides with prettier
        'react/jsx-max-props-per-line': [
            'error',
            { maximum: 1, when: 'multiline' },
        ],
        'react/jsx-no-bind': ['warn'],
        'react/jsx-no-comment-textnodes': ['error'],
        'react/jsx-no-duplicate-props': ['error'],
        'react/jsx-no-leaked-render': [
            'warn',
            { validStrategies: ['coerce', 'ternary'] },
        ],
        'react/jsx-no-script-url': ['warn'],
        'react/jsx-no-target-blank': ['error'],
        'react/jsx-no-undef': ['error'],
        'react/jsx-no-useless-fragment': ['warn'],
        'react/jsx-curly-brace-presence': ['error'],
        'react/jsx-fragments': ['warn'],
        'react/jsx-uses-react': ['error'],
        'react/jsx-uses-vars': ['error'],
        'react/jsx-wrap-multilines': ['error'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};
