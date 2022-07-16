import type { ESLint } from 'eslint';
// import { rules } from 'eslint-plugin-jest'
const jestConfig: Partial<ESLint.ConfigData> = {
    plugins: ['@uniqorg'],
    extends: [],
    env: {
        es6: true,
        'shared-node-browser': true,
    },
    rules: {
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
    },
};

export = jestConfig;
