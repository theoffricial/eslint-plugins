import type { TSESTree } from '@typescript-eslint/types';
import { AST_NODE_TYPES } from '@typescript-eslint/types';
import { CEBABEL_PARSER_AST_NODE_TYPES } from '../types/babel-ast-nodes';
import { createRule } from '../util';

export type TOptions = [{ esmodule: boolean }];
export type TMessageIds =
    | 'importShouldBeLiteral'
    | 'legacyImportShouldBeLiteral'
    | 'requireShouldBeLiteral';

function isRequire(node: TSESTree.CallExpression) {
    return (
        Boolean(node) &&
        node.callee &&
        node.callee.type === AST_NODE_TYPES.Identifier &&
        node.callee.name === 'require' &&
        node.arguments.length >= 1
    );
}

/** This function supports @babel/parser */
function isDynamicImport(node: TSESTree.CallExpression) {
    return (
        Boolean(node) &&
        node.callee &&
        // from @babel/parser
        node.callee.type === (CEBABEL_PARSER_AST_NODE_TYPES.Import as string)
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
    defaultOptions: [{ esmodule: false }],
    name: 'no-dynamic-import',

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
            legacyImportShouldBeLiteral:
                'Calls to import() should use string literals',
            importShouldBeLiteral:
                'Calls to import() should use string literals',
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
                if (
                    Boolean(node.arguments[0]) === false ||
                    isStaticValue(node.arguments[0])
                ) {
                    return;
                }

                if (isRequire(node)) {
                    context.report({
                        node,
                        messageId: 'requireShouldBeLiteral',
                        // message: 'Calls to require() should use string literals',
                    });
                    return;
                }
                if (esmodule && isDynamicImport(node)) {
                    context.report({
                        node,
                        messageId: 'legacyImportShouldBeLiteral',
                    });
                    return;
                }
            },
            ImportExpression(node) {
                if (!esmodule || isStaticValue(node.source)) {
                    return;
                }
                context.report({
                    node,
                    messageId: 'importShouldBeLiteral',
                });
            },
        };
    },
});
