import { ESLintUtils } from '@typescript-eslint/utils';
import path from 'path';

function getFixturesRootDir(): string {
  return path.join(__dirname, 'fixtures');
}

const { batchedSingleLineTests, RuleTester: ruleTester, noFormat } = ESLintUtils;

export { batchedSingleLineTests, getFixturesRootDir, noFormat, ruleTester as RuleTester };
