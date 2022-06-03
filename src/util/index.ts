import { ESLintUtils } from "@typescript-eslint/utils";
export { ruleMessageTemplate } from './rule-msg-template'
const repoUrl = 'https://github.com/postman-as-code/eslint-plugin-migrate-to-typescript'
export const createRule = ESLintUtils.RuleCreator(
    (name) => `${repoUrl}/blob/master/docs/rules/${name}.md`
);