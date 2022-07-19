import * as index from '../../src/rules';

const NUMBER_OF_RULES = 6;

const allRules: { [k in keyof typeof index.C_Rules]: k } = {
    'no-require': 'no-require',
    'no-commonjs-dynamic-require': 'no-commonjs-dynamic-require',
    'no-commonjs-exports': 'no-commonjs-exports',
    'no-commonjs-module-exports': 'no-commonjs-module-exports',
    'no-esm-export-default': 'no-esm-export-default',
    'no-esm-dynamic-import': 'no-esm-dynamic-import',
};

describe('rules index interface', () => {
    it('should export all rules', () => {
        const keys = Object.keys(index.C_Rules);
        expect(keys).toHaveLength(NUMBER_OF_RULES);
        expect(keys).toStrictEqual(
            expect.arrayContaining(Object.keys(allRules))
        );
    });
});
