import type { TSESTree } from '@typescript-eslint/types';
import { AST_NODE_TYPES } from '@typescript-eslint/types';

import { createRule } from '../util';

export type TOptions = [];
export type TMessageIds = 'requireShouldBeLiteral';

function isRequire(node?: TSESTree.CallExpression) {
    return Boolean(
        node?.callee &&
            node.callee.type === AST_NODE_TYPES.Identifier &&
            node.callee.name === 'require' &&
            node.arguments.length > 0
    );
}

function isStaticValue(
    arg: TSESTree.CallExpressionArgument | TSESTree.Expression
) {
    return (
        arg.type === AST_NODE_TYPES.Literal ||
        (arg.type === AST_NODE_TYPES.TemplateLiteral &&
            arg.expressions.length === 0)
    );
}

export default createRule<TOptions, TMessageIds>({
    defaultOptions: [],
    name: 'no-commonjs-dynamic-require',

    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Using this rule to disable the use of dynamic require for CommonJS or ESM import.',
            recommended: false,
        },
        messages: {
            requireShouldBeLiteral:
                'Calls to require() should use string literals',
        },
        schema: [{}],
    },

    create(context) {
        return {
            CallExpression(node) {
                if (
                    // eslint-disable-next-line no-extra-boolean-cast
                    !Boolean(node.arguments[0]) ||
                    isStaticValue(node.arguments[0])
                ) {
                    return;
                }

                if (isRequire(node)) {
                    context.report({
                        node,
                        messageId: 'requireShouldBeLiteral',
                    });
                    return;
                }
            },
        };
    },
});
