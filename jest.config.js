/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  "globals": {
    "ts-jest": {
      tsconfig: 'tsconfig.test.json',
    }
  },
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['/build/'],
  coveragePathIgnorePatterns: ['/build/'],
  testRegex: './tests/.+\\.test\\.ts$'
};