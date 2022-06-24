import { ESLintUtils } from '@typescript-eslint/utils';

export { ruleMessageTemplate } from './rule-msg-template';
const repoUrl = 'https://uniqorg.github.io/eslint-extensions';
export const createRule = ESLintUtils.RuleCreator(
    (name) => `${repoUrl}/docs/rules/${name}`
);

export * from './predicates';
export * from './misc';
export * from './null-throws';
