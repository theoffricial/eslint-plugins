import rule from '../../src/rules/no-commonjs-exports';
import { RuleTester } from '../rule-tester';

const ruleTester = new RuleTester({
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
    },
});

ruleTester.run('no-commonjs-exports', rule, {
    valid: [
        // esm export cases
        { code: 'export const a = {}' },
        { code: 'export default {}' },
        // esm export default cases
        { code: 'module.exports = {}' },
        { code: 'module.exports.a = {}' },
        // script case
        {
            code: 'const a = "test"; exports.a = {}',
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    invalid: [
        // Identifier cases
        { code: 'exports={}', errors: [{ messageId: 'noCommonJSExports' }] },
        { code: 'exports = {}', errors: [{ messageId: 'noCommonJSExports' }] },
        { code: 'exports ={}', errors: [{ messageId: 'noCommonJSExports' }] },
        {
            code: 'exports = "str"',
            errors: [{ messageId: 'noCommonJSExports' }],
        },
        {
            code: 'exports = () => {}',
            errors: [{ messageId: 'noCommonJSExports' }],
        },
        // MemberExpression cases
        {
            code: 'exports.a = {}',
            errors: [{ messageId: 'noCommonJSExports' }],
            output: 'export const a = {}',
        },
        {
            code: 'const a = "test"; exports.a = {}',
            errors: [{ messageId: 'noCommonJSExports' }],
            output: 'const a = "test"; exports.a = {}',
        },
    ],
});
