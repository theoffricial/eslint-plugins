import { ESLintUtils } from '@typescript-eslint/utils';

export { ruleMessageTemplate } from './rule-msg-template';
const repoUrl = 'https://github.com/uniqorg/eslint-plugins';
export const createRule = ESLintUtils.RuleCreator(
    (name) => `${repoUrl}/blob/master/docs/rules/${name}.md`
);

export * from './predicates';
export * from './misc';
export * from './null-throws';
