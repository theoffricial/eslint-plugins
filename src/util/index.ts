import { ESLintUtils } from "@typescript-eslint/utils";

const repoUrl = 'https://github.com/unicop/eslint-plugin-migrate-to-typescript'
export const createRule = ESLintUtils.RuleCreator((name) => `${repoUrl}/blob/master/docs/rules/${name}.md`);