import rule from '../../src/rules/no-require';
import { RuleTester } from '../rule-tester';

const ruleTester = new RuleTester({
    parser: '@typescript-eslint/parser',
});

ruleTester.run('no-require', rule, {
    valid: [
        // imports
        { code: 'import "x";' },
        { code: 'import x from "x"' },
        { code: 'import { x } from "x"' },

        // allowConditionalRequire option is true
        {
            code: 'if (true) require("x")',
            options: [{ allowConditionalRequire: true }],
        },
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
            code: 'var zero = require(0);',
            errors: [{ messageId: 'importInsteadOfRequire' }],
        },
        {
            code: 'var bar = require(`x${1}`);',
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

        // allowConditionalRequire option is false
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
