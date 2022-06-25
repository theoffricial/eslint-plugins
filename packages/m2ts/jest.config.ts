/* eslint-disable */
import type {InitialOptionsTsJest} from 'ts-jest';

const config: InitialOptionsTsJest = {
  displayName: "e",
  preset: "../../jest.preset.js",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  coverageReporters: ["lcov"],
  transform: {
    "^.+\\.[tj]s$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory: "../../coverage/packages/m2ts",
};

export default config;