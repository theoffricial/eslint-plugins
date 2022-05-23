/* eslint-disable eslint-comments/no-use */
// this rule tests the new lines, which prettier will want to fix and break the tests
/* eslint "@typescript-eslint/internal/plugin-test-formatting": ["error", { formatWithPrettier: false }] */
/* eslint-enable eslint-comments/no-use */
import rule, * as noModuleExports from '../../src/rules/no-module-exports';
import { RuleTester } from '../RuleTester';

const ruleTester = new RuleTester({
    parser: '@typescript-eslint/parser',
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
    ],
    invalid: [
        {
            code: 'module.exports.face = "palm"',
            errors: [{ messageId: 'noModuleExports' }],
        },
        {
            code: 'module.exports = face',
            errors: [{ messageId: 'noModuleExports' }],
        },
        {
            code: 'exports = module.exports = {}',
            errors: [{ messageId: 'noModuleExports' }],
        },
        {
            code: 'var x = module.exports = {}',
            errors: [{ messageId: 'noModuleExports' }],
        },
        {
            code: 'module.exports = {}',
            errors: [{ messageId: 'noModuleExports' }],
        },
        {
            code: 'var x = module.exports',
            errors: [{ messageId: 'noModuleExports' }],
        },
    ],
});
