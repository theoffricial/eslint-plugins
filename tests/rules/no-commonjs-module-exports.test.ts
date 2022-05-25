/* eslint-disable eslint-comments/no-use */
// this rule tests the new lines, which prettier will want to fix and break the tests
/* eslint "@typescript-eslint/internal/plugin-test-formatting": ["error", { formatWithPrettier: false }] */
/* eslint-enable eslint-comments/no-use */
import rule from '../../src/rules/no-commonjs-module-exports';

import { RuleTester } from '../RuleTester';

const ruleTester = new RuleTester({
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
    },
});

ruleTester.run('no-require', rule, {
    valid: [
        { code: 'export default "x"' },
        { code: 'export function house() {}' },
        {
            code:
                'function someFunc() {\n' +
                '  const exports = someComputation();\n' +
                '\n' +
                "  expect(exports.someProp).toEqual({ a: 'value' });\n" +
                '}',
        },

        // script
        {
            code: 'module.exports = face',
            parserOptions: { sourceType: 'script' },
        },
        {
            code: 'module.exports.face = "palm"',
            parserOptions: { sourceType: 'script' },
        },
    ],
    invalid: [
        {
            code: 'module.exports.face = "palm"',
            errors: [{ messageId: 'noCommonJsModuleExports' }],
        },
        {
            code: 'module.exports = face',
            errors: [{ messageId: 'noCommonJsModuleExports' }],
        },
        {
            code: 'exports = module.exports = {}',
            errors: [{ messageId: 'noCommonJsModuleExports' }],
        },
        {
            code: 'var x = module.exports = {}',
            errors: [{ messageId: 'noCommonJsModuleExports' }],
        },
        {
            code: 'module.exports = {}',
            errors: [{ messageId: 'noCommonJsModuleExports' }],
        },
        {
            code: 'var x = module.exports',
            errors: [{ messageId: 'noCommonJsModuleExports' }],
        },
    ],
});
