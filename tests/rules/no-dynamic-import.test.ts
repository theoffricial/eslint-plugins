// this rule tests the new lines, which prettier will want to fix and break the tests
import type {
    InvalidTestCase,
    ValidTestCase,
} from '@typescript-eslint/utils/dist/ts-eslint';
import type * as noDynamicImportTypes from '../../src/rules/no-dynamic-import';
import rule from '../../src/rules/no-dynamic-import';
import { RuleTester } from '../RuleTester';

const ruleTester = new RuleTester({
    parser: '@typescript-eslint/parser',
});

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
                { code: 'import("../" + name)' },
                { code: 'import(`../${name}`)' },
            ] as ValidTestCase<noDynamicImportTypes.TOptions>[]
        ).map((testObj) => ({
            ...testObj,
            name: `[esmodule: false] ${testObj.code}`,
        })),
        // esm option true
        ...(
            [
                { code: 'import("foo")' },
                { code: 'import(`foo`)' },
                { code: 'import("./foo")' },
                { code: 'import("@scope/foo")' },
                { code: 'var foo = import("foo")' },
                { code: 'var foo = import(`foo`)' },
                { code: 'var foo = import("./foo")' },
                { code: 'var foo = import("@scope/foo")' },
            ] as ValidTestCase<noDynamicImportTypes.TOptions>[]
        ).map<ValidTestCase<noDynamicImportTypes.TOptions>>((testObj) => ({
            ...testObj,
            name: `[esmodule: true] ${testObj.code}`,
            options: [{ esmodule: true }],
        })),
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
            options: [{ esmodule: true }],
        },
        // esm imports
        ...(
            [
                { code: 'import("../" + name)' },
                { code: 'import(`../${name}`)' },
                { code: 'import(name)' },
                { code: 'import(name())' },
            ] as InvalidTestCase<
                noDynamicImportTypes.TMessageIds,
                noDynamicImportTypes.TOptions
            >[]
        ).map<
            InvalidTestCase<
                noDynamicImportTypes.TMessageIds,
                noDynamicImportTypes.TOptions
            >
        >((testObj) => ({
            ...testObj,
            name: `[esmodule: true] ${testObj.code}`,
            options: [{ esmodule: true }],
            errors: [{ messageId: 'importShouldBeLiteral' }],
        })),
    ],
});
