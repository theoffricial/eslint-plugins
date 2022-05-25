/* eslint-disable eslint-comments/no-use */
// this rule tests the new lines, which prettier will want to fix and break the tests
/* eslint "@typescript-eslint/internal/plugin-test-formatting": ["error", { formatWithPrettier: false }] */
/* eslint-enable eslint-comments/no-use */
import {
    InvalidTestCase,
    ValidTestCase,
} from '@typescript-eslint/utils/dist/ts-eslint';
import rule, * as noRequireRule from '../../src/rules/no-require';
import { RuleTester } from '../RuleTester';

const ruleTester = new RuleTester({
    parser: '@typescript-eslint/parser',
});

ruleTester.run('no-require', rule, {
    valid: [
        // imports
        { code: 'import "x";' },
        { code: 'import x from "x"' },
        { code: 'import { x } from "x"' },

        { code: 'require.resolve("help")' }, // methods of require are allowed
        { code: 'require.ensure([])' }, // webpack specific require.ensure is allowed
        { code: 'require([], function(a, b, c) {})' }, // AMD require is allowed
        { code: "var bar = require('./bar', true);" },
        { code: "var bar = proxyquire('./bar');" },
        { code: "var bar = require('./ba' + 'r');" },
        {
            code: 'var bar = require(`x${1}`);',
            parserOptions: { ecmaVersion: 2015 },
        },
        { code: 'var zero = require(0);' },

        // allowConditionalRequire option is true
        {
            code: 'if (typeof window !== "undefined") require("x")',
            options: [{ allowConditionalRequire: true }],
        },
        {
            code: 'if (typeof window !== "undefined") { require("x") }',
            options: [{ allowConditionalRequire: true }],
        },
        {
            code: 'try { require("x") } catch (error) {}',
            options: [{ allowConditionalRequire: true }],
        },
    ],
    invalid: [
        // requires
        {
            code: 'function a() { var x = require("y"); }',
            errors: [{ messageId: 'importInsteadOfRequire' }],
        },
        {
            code: 'var a = c && require("b")',
            errors: [{ messageId: 'importInsteadOfRequire' }],
        },
        {
            code: 'var x = require("x")',
            errors: [{ messageId: 'importInsteadOfRequire' }],
        },
        {
            code: 'x = require("x")',
            errors: [{ messageId: 'importInsteadOfRequire' }],
        },
        {
            code: 'require("x")',
            errors: [{ messageId: 'importInsteadOfRequire' }],
        },
        {
            code: 'require(`x`)',
            errors: [{ messageId: 'importInsteadOfRequire' }],
        },

        // allowConditionalRequire option false
        {
            code: 'if (typeof window !== "undefined") require("x")',
            options: [{ allowConditionalRequire: false }],
            errors: [{ messageId: 'importInsteadOfRequire' }],
        },
        {
            code: 'if (typeof window !== "undefined") { require("x") }',
            options: [{ allowConditionalRequire: false }],
            errors: [{ messageId: 'importInsteadOfRequire' }],
        },
        {
            code: 'try { require("x") } catch (error) {}',
            options: [{ allowConditionalRequire: false }],
            errors: [{ messageId: 'importInsteadOfRequire' }],
        },
    ],
});
