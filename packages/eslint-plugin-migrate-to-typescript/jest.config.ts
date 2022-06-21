/* eslint-disable */
import type {InitialOptionsTsJest} from 'ts-jest';

const config: InitialOptionsTsJest = {
  displayName: 'eslint-plugin-migrate-to-typescript',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/eslint-plugin-migrate-to-typescript',
  testMatch: ['**/packages/eslint-plugin-migrate-to-typescript/tests/**/*.test.+(ts|js)?(x)'],
  testEnvironment: 'node'
}
export default config;
