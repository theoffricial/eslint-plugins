import { TSESTree, AST_NODE_TYPES } from '@typescript-eslint/types';

import { createRule, ruleMessageTemplate } from '../util';

export type Options = [{ allowConditionalRequire?: boolean }];
export type MessageIds = 'importInsteadOfRequire';

/** This function checks for a conditional statement */
function isConditional(node: TSESTree.Node): boolean {
    if (
        node.type === AST_NODE_TYPES.IfStatement ||
        node.type === AST_NODE_TYPES.TryStatement ||
        node.type === AST_NODE_TYPES.LogicalExpression ||
        node.type === AST_NODE_TYPES.ConditionalExpression
    )
        return true;
    if (node.parent) return isConditional(node.parent);
    return false;
}

/** This function checks for literal  */
function isLiteralString(node: TSESTree.Node | null): boolean {
    if (!node) return false;
    return (
        (node.type === AST_NODE_TYPES.Literal && typeof node.value === 'string') ||
        (node.type === AST_NODE_TYPES.TemplateLiteral && node.expressions.length === 0)
    );
}

export default createRule<Options, MessageIds>({
    defaultOptions: [{}],
    name: 'no-require',
    meta: {
        type: 'suggestion',
        docs: {
            description: ruleMessageTemplate({
                why: 'Prefer ESM import/export syntax over CommonJS module.exports and require().',
                linterMessage:
                    'ESM is the standard for JavaScript modules, and is also much more readable compared to require().',
            }),
            recommended: false,
        },
        messages: {
            importInsteadOfRequire: ruleMessageTemplate({
                why: 'TypeScript is recommending to use the ESM (ECMAScript Modules)',
                linterMessage: 'Expected "import" instead of "require()"',
            }),
        },
        schema: [
            {
                type: 'object',
                properties: {
                    allowConditionalRequire: { type: 'boolean' },
                },
                additionalProperties: false,
            },
        ],
    },

    create(context) {
        const { allowConditionalRequire = false } = context.options[0] || {};

        return {
            CallExpression: function (node) {
                if (node.callee.type !== AST_NODE_TYPES.Identifier) return;
                if (node.callee.name !== 'require') return;

                // keeping it simple: all 1-string-arg `require` calls are reported
                if (node.arguments.length !== 1) return;

                if (!isLiteralString(node.arguments[0])) return;

                if (allowConditionalRequire && node.parent && isConditional(node.parent)) return;
                context.report({
                    node: node.callee,
                    messageId: 'importInsteadOfRequire',
                });
            },
        };
    },
});
