import { TSESTree, AST_NODE_TYPES } from '@typescript-eslint/types';

import { createRule } from '../util';

export type Options = [{ allowConditionalRequire?: boolean }];
export type MessageIds = 'importInsteadOfRequire';

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

function isLiteralString(node: TSESTree.Node | null) {
    if (!node) return false;
    return (
        (node.type === AST_NODE_TYPES.Literal &&
            typeof node.value === 'string') ||
        (node.type === AST_NODE_TYPES.TemplateLiteral &&
            node.expressions.length === 0)
    );
}

export default createRule<Options, MessageIds>({
    defaultOptions: [{}],
    name: 'no-require',
    meta: {
        type: 'suggestion',
        docs: {
            description: `Prefer ESM import/export syntax over CommonJS module.exports and require().
       Why? ESM is the standard for JavaScript modules, and is also much more readable compared to require().`,
            recommended: false,
        },
        messages: {
            importInsteadOfRequire: 'Expected "import" instead of "require()"',
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
            CallExpression: function (call) {
                if (call.callee.type !== 'Identifier') return;
                if (call.callee.name !== 'require') return;

                if (call.arguments.length !== 1) return;
                // keeping it simple: all 1-string-arg `require` calls are reported
                if (!isLiteralString(call.arguments[0])) return; // Do we want 1 arg only or any arg?

                if (
                    allowConditionalRequire &&
                    call.parent &&
                    isConditional(call.parent)
                )
                    return;
                context.report({
                    node: call.callee,
                    messageId: 'importInsteadOfRequire',
                });
            },
        };
    },
});
