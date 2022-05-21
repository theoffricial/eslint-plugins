/* eslint-disable eslint-comments/no-use */
// this rule tests the new lines, which prettier will want to fix and break the tests
/* eslint "@typescript-eslint/internal/plugin-test-formatting": ["error", { formatWithPrettier: false }] */
/* eslint-enable eslint-comments/no-use */
import { InvalidTestCase, ValidTestCase } from '@typescript-eslint/utils/dist/ts-eslint';
import rule, * as noDynamicImportTypes from '../../src/rules/no-dynamic-import';
import { RuleTester } from '../RuleTester';

const error = {
    message: 'Calls to require() should use string literals',
};

const ruleTester = new RuleTester({
    parser: '@typescript-eslint/parser',
});

const dynamicImportError = {
    message: 'Calls to import() should use string literals',
};

ruleTester.run('no-dynamic-import', rule, {
    valid: [
        { code: 'import _ from "lodash"' },
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
        // esm option false
        ...(
            [
                { code: 'import("../" + name)', },
                { code: 'import(`../${name}`)', }
            ] as ValidTestCase<noDynamicImportTypes.Options>[])
            .map(testObj => ({
                ...testObj,
                name: `[esmodule: false] ${testObj.code}`
            })),
        // esm option true
        ...(
            [
                { code: 'import("foo")', },
                { code: 'import(`foo`)', },
                { code: 'import("./foo")', },
                { code: 'import("@scope/foo")' },
                { code: 'var foo = import("foo")', },
                { code: 'var foo = import(`foo`)', },
                { code: 'var foo = import("./foo")', },
                { code: 'var foo = import("@scope/foo")', },
            ] as ValidTestCase<noDynamicImportTypes.Options>[])
            .map<ValidTestCase<noDynamicImportTypes.Options>>(testObj => ({
                ...testObj,
                name: `[esmodule: true] ${testObj.code}`,
                options: [{ esmodule: true }],
            }))
    ],
    invalid: [
        {
            code: 'require("../" + name)',
            errors: [{ messageId: 'requireShouldBeLiteral' }]
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
            options: [{ esmodule: true }],
        },
        // esm imports
        ...(([
            { code: 'import("../" + name)' },
            { code: 'import(`../${name}`)' },
            { code: 'import(name)', },
            { code: 'import(name())', },
        ] as InvalidTestCase<noDynamicImportTypes.MessageIds, noDynamicImportTypes.Options>[])
            .map<InvalidTestCase<noDynamicImportTypes.MessageIds, noDynamicImportTypes.Options>>(testObj => ({
                ...testObj,
                name: `[esmodule: true] ${testObj.code}`,
                options: [{ esmodule: true }],
                errors: [{ messageId: 'importShouldBeLiteral' }]
            })))
    ]
});

