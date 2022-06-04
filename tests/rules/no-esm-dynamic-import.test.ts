import rule from '../../src/rules/no-esm-dynamic-import';
import { RuleTester } from '../RuleTester';

const error = {
    message: 'Calls to require() should use string literals',
};

const ruleTester = new RuleTester({
    parser: '@typescript-eslint/parser',
});

ruleTester.run('no-dynamic-import', rule, {
    valid: [
        // static require
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
        // static import
        { code: 'import _ from "lodash"' },
        { code: 'import("foo")', },
        { code: 'import(`foo`)', },
        { code: 'import("./foo")', },
        { code: 'import("@scope/foo")' },
        { code: 'var foo = import("foo")', },
        { code: 'var foo = import(`foo`)', },
        { code: 'var foo = import("./foo")', },
        { code: 'var foo = import("@scope/foo")', },
        // dynamic require cases
        {code: 'require("../" + name)'},
        {code: 'require(`../${name}`)'},
        {code: 'var foo = require(`foo${x}`)',},
        {code: 'require(name + "foo", "bar")',},
        {code: 'require(name)',},
        {code: 'require(name())',},
        {code: 'require(`foo${x}`)',},
    ],
    invalid: [
        // dynamic esm import
        { 
            code: 'import("../" + name)', 
            errors: [{ messageId: 'importShouldBeLiteral' }]},
        { 
            code: 'import(`../${name}`)', 
            errors: [{ messageId: 'importShouldBeLiteral' }]
        },
        { code: 'import(name)', errors: [{ messageId: 'importShouldBeLiteral' }]},
        { code: 'import(name())', errors: [{ messageId: 'importShouldBeLiteral' }]},
    ]
});

