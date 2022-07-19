import type { TSESTree } from '@typescript-eslint/types';
import { AST_NODE_TYPES } from '@typescript-eslint/types';
import { C_EBABEL_PARSER_AST_NODE_TYPES } from '../shared/types';
import { createRule } from '../util';

export type TOptions = [];
export type TMessageIds =
    | 'importShouldBeLiteral'
    | 'legacyParsersImportShouldBeLiteral';

/** This function supports @babel/parser */
function isDynamicImport(node: TSESTree.CallExpression) {
    return (
        Boolean(node) &&
        node.callee &&
        // from @babel/parser
        node.callee.type === (C_EBABEL_PARSER_AST_NODE_TYPES.Import as string)
    );
}

function isStaticValue(
    argument: TSESTree.CallExpressionArgument | TSESTree.Expression
) {
    return (
        argument.type === AST_NODE_TYPES.Literal ||
        (argument.type === AST_NODE_TYPES.TemplateLiteral &&
            argument.expressions.length === 0)
    );
}

export default createRule<TOptions, TMessageIds>({
    defaultOptions: [],
    name: 'no-esm-dynamic-import',

    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Using this rule to disable the use of dynamic require for CommonJS or ESM import.',
            recommended: false,
        },
        messages: {
            legacyParsersImportShouldBeLiteral:
                'Calls to import() should use string literals',
            importShouldBeLiteral:
                'Calls to import() should use string literals',
        },
        schema: [{}],
    },

    create(context) {
        return {
            CallExpression(node) {
                if (
                    Boolean(node.arguments[0]) === false ||
                    isStaticValue(node.arguments[0])
                ) {
                    return;
                }
                if (isDynamicImport(node)) {
                    context.report({
                        node,
                        messageId: 'legacyParsersImportShouldBeLiteral',
                    });
                }
            },
            ImportExpression(node) {
                if (isStaticValue(node.source)) {
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
