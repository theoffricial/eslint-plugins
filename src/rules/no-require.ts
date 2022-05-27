import type { TSESTree } from '@typescript-eslint/types';
import { AST_NODE_TYPES } from '@typescript-eslint/types';

import { createRule, ruleMessageTemplate } from '../util';

export type TOptions = [{ allowConditionalRequire?: boolean }];
export type TMessageIds = 'importInsteadOfRequire';

export default createRule<TOptions, TMessageIds>({
    defaultOptions: [{ allowConditionalRequire: false }],
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
                    // example: 'if (typeof window !== "undefined") require("x")'
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
                if (!isRequire(node)) return;

                if (!hasOneArgument(node)) return;

                if (allowConditionalRequire && isConditional(node)) return;
                context.report({
                    node: node.callee,
                    messageId: 'importInsteadOfRequire',
                });
            },
        };
    },
});

/** Checks that the 'require()' call has only 1 argument (TS shows error when more than 1 argument is provided) */
function hasOneArgument(node: TSESTree.CallExpression): boolean {
    return node.arguments.length === 1;
}

/** Checks if the callee (what is being called) is 'require()' */
function isRequire(node: TSESTree.CallExpression): boolean {
    return node.callee.type === AST_NODE_TYPES.Identifier && node.callee.name === 'require';
}

/** Checks for a conditional statement.
 * example: 'if (true) require("x")'
 */
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

/** Checks if a node is of type 'string'  */
function isLiteralString(node: TSESTree.Node | null): boolean {
    if (!node) return false;
    return (
        (node.type === AST_NODE_TYPES.Literal && typeof node.value === 'string') ||
        (node.type === AST_NODE_TYPES.TemplateLiteral && node.expressions.length === 0)
    );
}
