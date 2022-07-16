import type { ESLint } from 'eslint';
// import { rules } from 'eslint-plugin-jest'
const jestConfig: Partial<ESLint.ConfigData> = {
    plugins: ['import', 'unicorn', 'migrate-to-typescript'],
    extends: [],
    env: {
        es6: true,
        'shared-node-browser': true,
    },
    settings: {
        // verify these
        'import/extensions': ['.js', '.jsx'],
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
    parserOptions: {
        sourceType: 'module',
    },
    overrides: [
        {
            parser: '@typescript-eslint/parser',
            files: ['.ts', '.tsx'],
            settings: {
                'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
                'import/resolver': {
                    node: {
                        extensions: ['.ts', '.tsx', '.js', '.jsx'],
                    },
                },
            },
        },
    ],
    rules: {
        'no-duplicate-imports': 'error',
        'no-import-assign': 'error',
        'no-useless-rename': 'error',
        // too opinionated..
        'no-restricted-imports': 'off',
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: false,
            },
        ],
        // unicorn ok
        'unicorn/prefer-module': 'error',
        'import/no-unresolved': ['error', { commonjs: true }],
        // v16.0.0, v14.18.0 (ESM import and CommonJS require())
        //  v14.13.1, v12.20.0 (only ESM import)
        'unicorn/prefer-node-protocol': 'error',
        // maybe irrelevant
        'unicorn/import-style': 'error',
        // import
        'import/named': 'error',
        'import/default': 'off',
        'import/namespace': ['error', { allowComputed: false }],
        'import/no-absolute-path': ['error'],
        'import/no-webpack-loader-syntax': ['error'],
        'import/no-self-import': 'error',
        'import/no-useless-path-segments': [
            'error',
            {
                // If you want to detect unnecessary /index or /index.js (depending on the specified file extensions, see below) imports in your paths, you can enable the option noUselessIndex. By default it is set to false
                noUselessIndex: true,
                // When set to true, this rule checks CommonJS imports. Default to false.
                commonjs: true,
            },
        ],
        // below declared as "helpful warnings"
        'import/export': 'error',
        // avoid confusion between default and named exports
        'import/no-named-as-default-member': 'error',
        'import/no-deprecated': 'warn',
        'import/no-extraneous-dependencies': 'warn',
        'import/no-mutable-exports': 'error',
        // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-unused-modules.md
        'import/no-unused-modules': [
            'warn',
            {
                unusedExports: true,
            },
        ],
        // the below rules defined as module-systems
        // too tricky
        // maybe add it separately - for existing projects
        'import/no-cycle': 'error',
        // mono-repo - not relevant to all
        'import/no-relative-packages': ['error'],
        // allow for frontend libs
        'import/no-named-as-default': 'error',
        // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/unambiguous.md
        'import/unambiguous': 'warn',
        // use migrate to typescript plugin
        // 'import/no-commonjs': [
        //     'warn',
        //     {
        //         // If allowRequire option is set to true, require calls are valid:
        //         allowRequire: false,
        //         // should be true for frontend projects with bundlers
        //         allowPrimitiveModules: false,
        //     },
        // ],
        'import/no-amd': ['error'],
        // should set to error for client-side project only
        'import/no-nodejs-modules': 'error',
        'import/no-import-module-exports': 'error',
        'import/no-namespace': 'off',
        'import/extensions': [
            'error',
            {
                js: 'never',
                jsx: 'never',
                // for typescript only
                ts: 'never',
                tsx: 'never',
                // js: 'never',
            },
        ],
        // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/order.md
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'type',
                    'index',
                    'objects',
                ],
            },
        ],
        'import/newline-after-import': 'error',
        'import/prefer-default-export': 'off',
        'import/max-dependencies': 'off',
        'import/forbid-unassigned-import': 'off',
        // all definitions here declared as 'style guide'
        'import/fisrt': 'error',
        'import/exports-last': 'off',
        'import/no-duplicates': 'error',
        'import/no-named-export': 'off',
        'import/no-anonymous-default-export': 'off',
        'import/group-exports': 'off',
        'dynamic-import-chunkname': 'off',

        // too opinionated
        'import/no-restricted-paths': [
            'error',
            {
                zones: [
                    {
                        target: ['**/packages/**'],
                        from: ['**/apps/**'],
                        except: [],
                    },
                ],
            },
        ],
        // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-internal-modules.md
        'import/no-internal-modules': [
            'error',
            {
                // forbid that exclude paths and import
                //  statements that can be imported with reaching.
                forbid: [
                    '**/src/**/*',
                    '**/components/**/*',
                    '**/shared/**/*',
                    '**/tests/**/*',
                ],
                // allow that include paths and import
                // statements that can be imported with reaching.
                allow: ['**/actions/*', 'source-map-support/*'],
            },
        ],
        'import/no-relative-parent-imports': 'error',
        // migrate-to-typescript
        // include dynamic modules (too opinionated)
        'migrate-to-typescript/sdsd': ['error'],
    },
};

export = jestConfig;
