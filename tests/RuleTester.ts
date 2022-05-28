import path from 'path';
import { ESLintUtils } from '@typescript-eslint/utils';

function getFixturesRootDir(): string {
    return path.join(__dirname, 'fixtures');
}

const {
    batchedSingleLineTests,
    RuleTester: CRuleTester,
    noFormat,
} = ESLintUtils;

export {
    batchedSingleLineTests,
    getFixturesRootDir,
    noFormat,
    CRuleTester as RuleTester,
};
