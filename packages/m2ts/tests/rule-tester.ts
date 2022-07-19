import path from 'node:path';
import { ESLintUtils } from '@typescript-eslint/utils';

function getFixturesRootDirectory(): string {
    return path.join(__dirname, 'fixtures');
}

const {
    batchedSingleLineTests,
    RuleTester: C_RuleTester,
    noFormat,
} = ESLintUtils;

export {
    batchedSingleLineTests,
    getFixturesRootDirectory as getFixturesRootDir,
    noFormat,
    C_RuleTester as RuleTester,
};
