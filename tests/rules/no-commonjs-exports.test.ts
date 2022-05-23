import { InvalidTestCase, ValidTestCase } from '@typescript-eslint/utils/dist/ts-eslint';
import rule, * as noCommonjsExportsTypes from '../../src/rules/no-commonjs-exports';
import { RuleTester } from '../RuleTester';

const ruleTester = new RuleTester({
    parser: '@typescript-eslint/parser',
});


ruleTester.run('no-commonjs-exports', rule, {
    valid: [
        { code: 'export const a = {}' },
        { code: 'export default {}' },
        { code: 'module.exports = {}' },
        { code: 'module.exports.a = {}' },
    ],
    invalid: [
        // 
        { code: 'exports={}', errors: [{ messageId: 'noCommonJSExports' }] },
        { code: 'exports = {}', errors: [{ messageId: 'noCommonJSExports' }] },
        { code: 'exports ={}', errors: [{ messageId: 'noCommonJSExports' }] },
        { code: 'exports = "str"', errors: [{ messageId: 'noCommonJSExports' }] },
        { code: 'exports = () => {}', errors: [{ messageId: 'noCommonJSExports' }] },
        // isExportsPropertyAssigned & sourceType='module'
        {
            code: 'exports.a = {}',
            errors: [{ messageId: 'noCommonJSExports' }],
            parserOptions: {
                sourceType: 'module'
            },
            output: 'export const a = {}'
        },
        // isExportsPropertyAssigned & sourceType='script'
        {
            code: 'const a = "test"; exports.a = {}',
            errors: [{ messageId: 'noCommonJSExports' }],
            output: 'const a = "test"; exports.a = {}'
        },
        {
            code: 'const a = "test"; exports.a = {}',
            parserOptions: {
                sourceType: 'script'
            },
            errors: [{ messageId: 'noCommonJSExports' }],
            output: 'const a = "test"; exports.a = {}'
        },
    ]
});