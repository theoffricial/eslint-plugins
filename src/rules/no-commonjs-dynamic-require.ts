import { TSESTree, AST_NODE_TYPES } from '@typescript-eslint/types';

import { createRule } from '../util';

export type Options = [{ }];
export type MessageIds = 'requireShouldBeLiteral';

function isRequire(node: TSESTree.CallExpression) {
    return node &&
        node.callee &&
        node.callee.type === AST_NODE_TYPES.Identifier &&
        node.callee.name === 'require' &&
        node.arguments.length >= 1;
}

function isStaticValue(arg: TSESTree.CallExpressionArgument | TSESTree.Expression) {
    return arg.type === AST_NODE_TYPES.Literal ||
        (arg.type === AST_NODE_TYPES.TemplateLiteral && arg.expressions.length === 0);
}


export default createRule<Options, MessageIds>({
    defaultOptions: [{} = {}],
    name: 'no-dynamic-import',

    meta: {
        type: 'suggestion',
        docs: {
            description: 'Using this rule to disable the use of dynamic require for CommonJS or ESM import.',
            recommended: false
        },
        messages: {
            requireShouldBeLiteral: 'Calls to require() should use string literals'
        },
        schema: [{}],
    },

    create(context) {

        const [{ } = { }] = context.options;

        return {
            CallExpression(node) {
                if (!node.arguments[0] || isStaticValue(node.arguments[0])) {
                    return;
                }

                if (isRequire(node)) {
                    return context.report({
                        node,
                        messageId: 'requireShouldBeLiteral',
                    });
                }
            }
        };
    },
})

