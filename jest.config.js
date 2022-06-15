/* eslint-disable import/no-commonjs */
/* eslint-disable import/unambiguous */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json',
        },
    },
    testEnvironment: 'node',
    modulePathIgnorePatterns: ['build', 'website', 'node_modules'],
    coveragePathIgnorePatterns: ['/build/', 'node_modules', 'website'],
    testRegex: './tests/.+\\.test\\.ts$',
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,ts}',
        '!<rootDir>/node_modules',
        '!<rootDir>/website',
    ],
    collectCoverage: true,
    coverageThreshold: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'src/rules/**/*.ts': {
            lines: 85,
            branches: 80,
            functions: 40,
            statements: -10,
        },
    },
};
