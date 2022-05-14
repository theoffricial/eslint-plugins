import { TSESTree, AST_NODE_TYPES } from '@typescript-eslint/types';
import { createRule } from '../util';

type Options = [{ esmodule?: boolean }]
type MessageIds = 'bla1' | 'bla2' | 'bla3';

function isRequire(node: TSESTree.CallExpression) {
    return node &&
        node.callee &&
        node.callee.type === 'Identifier' &&
        node.callee.name === 'require' &&
        node.arguments.length >= 1;
}

function isDynamicImport(node: TSESTree.CallExpression) {
    return node &&
        node.callee &&
        node.callee.type.includes('Import')
}

function isStaticValue(arg: TSESTree.CallExpressionArgument | TSESTree.Expression) {
    return arg.type === AST_NODE_TYPES.Literal ||
        (arg.type === AST_NODE_TYPES.TemplateLiteral && arg.expressions.length === 0);
}

// const dynamicImportErrorMessage = 'Calls to import() should use string literals';

export default createRule<Options, MessageIds>({
    defaultOptions: [{}],
    name: 'bla-test-rule',

    meta: {
        type: 'suggestion',
        docs: {
            description: 'test bla rule',
            recommended: false
        },
        messages: {
            bla1: 'Blabla 1',
            bla2: 'Blabla 2',
            bla3: 'Blabla 3',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    esmodule: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },

    create(context) {

        const [{ esmodule } = { esmodule: false }] = context.options;

        return {
            CallExpression(node) {
                if (!node.arguments[0] || isStaticValue(node.arguments[0])) {
                    return;
                }
                if (isRequire(node)) {
                    return context.report({
                        node,
                        messageId: 'bla1',
                        // message: 'Calls to require() should use string literals',
                    });
                }
                if (esmodule && isDynamicImport(node)) {
                    return context.report({
                        node,
                        messageId: 'bla2',
                        // message: dynamicImportErrorMessage,
                    });
                }
            },
            ImportExpression(node) {
                if (!esmodule || isStaticValue(node.source)) {
                    return;
                }
                return context.report({
                    node,
                    messageId: 'bla3',
                    // message: dynamicImportErrorMessage,
                });
            },
        };
    },
})

