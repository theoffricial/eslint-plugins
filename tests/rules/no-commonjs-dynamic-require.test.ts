import rule from '../../src/rules/no-commonjs-dynamic-require';
import { RuleTester } from '../rule-tester';

const ruleTester = new RuleTester({
    parser: '@typescript-eslint/parser',
});

ruleTester.run('no-dynamic-import', rule, {
    valid: [
        // static esm import
        { code: 'import _ from "lodash"' },
        { code: 'import("foo")' },
        { code: 'import(`foo`)' },
        { code: 'import("./foo")' },
        { code: 'import("@scope/foo")' },
        { code: 'var foo = import("foo")' },
        { code: 'var foo = import(`foo`)' },
        { code: 'var foo = import("./foo")' },
        { code: 'var foo = import("@scope/foo")' },
        // dynamic esm import
        { code: 'import("../" + name)' },
        { code: 'import(`../${name}`)' },
        { code: 'import(name)' },
        { code: 'import(name())' },
        // static commonjs require
        { code: 'require("foo")' },
        { code: 'require(`foo`)' },
        { code: 'require("./foo")' },
        { code: 'require("@scope/foo")' },
        { code: 'require()' },
        { code: 'require("./foo", "bar" + "okay")' },
        { code: 'var foo = require("foo")' },
        { code: 'var foo = require(`foo`)' },
        { code: 'var foo = require("./foo")' },
        { code: 'var foo = require("@scope/foo")' },
    ],
    invalid: [
        {
            code: 'require("../" + name)',
            errors: [{ messageId: 'requireShouldBeLiteral' }],
        },
        {
            code: 'require(`../${name}`)',
            errors: [{ messageId: 'requireShouldBeLiteral' }],
        },
        {
            code: 'require(name)',
            errors: [{ messageId: 'requireShouldBeLiteral' }],
        },
        {
            code: 'require(name())',
            errors: [{ messageId: 'requireShouldBeLiteral' }],
        },
        {
            code: 'require(`foo${x}`)',
            errors: [{ messageId: 'requireShouldBeLiteral' }],
        },
        {
            code: 'var foo = require(`foo${x}`)',
            errors: [{ messageId: 'requireShouldBeLiteral' }],
        },
        {
            code: 'require(name + "foo", "bar")',
            errors: [{ messageId: 'requireShouldBeLiteral' }],
        },
    ],
});
