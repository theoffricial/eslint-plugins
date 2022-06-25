import path from "path";
import { ESLintUtils } from "@typescript-eslint/utils";

function getFixturesRootDirectory(): string {
  return path.join(__dirname, "fixtures");
}

const {
  batchedSingleLineTests,
  RuleTester: CRuleTester,
  noFormat,
} = ESLintUtils;

export {
  batchedSingleLineTests,
  getFixturesRootDirectory as getFixturesRootDir,
  noFormat,
  CRuleTester as RuleTester,
};
