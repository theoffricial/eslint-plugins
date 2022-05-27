import { AST_NODE_TYPES, TSESTree } from "@typescript-eslint/types";
import { Scope } from "@typescript-eslint/utils/dist/ts-eslint";
import { EScopeType } from "../constants";
import { createRule, ruleMessageTemplate } from "../util";

export type Options = [];
export type MessageIds = 'noCommonJSExports';

const topLevelVariablesSet = new Set<string>();
const EXPORTS = "exports";

export default createRule<Options, MessageIds>({
    defaultOptions: [],
    name: 'no-commonjs-exports',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disable the use of CommonJS "exports" for exporting modules in your project.',
            recommended: false
        },
        fixable: 'code',
        messages: {
            noCommonJSExports: ruleMessageTemplate({
                why: 'TypeScript official module system is ESM (ECMAScript Modules), Also the future of JavaScript in general.',
                linterMessage: `Calls to CommonJS "${EXPORTS}" should be replaced with ESM "export" syntax.`
            })
        },
        schema: [],

    },
    create(context) {
        return {
            Program(_node) {
                topLevelVariablesSet.clear()
            },
            MemberExpression(node) {
                if (!isModuleScope(context.getScope())) {
                    return;
                }
                if (isMemberExpressionAnExports(node)) {
                    const nodeLeftPropIdentifier = node.property as TSESTree.Identifier
                    context.report({
                        node,
                        messageId: 'noCommonJSExports',
                        fix(fixer) {
                            return [
                                ...(
                                    // and only if no variable exists
                                    topLevelVariablesSet.has(nodeLeftPropIdentifier.name) ?
                                        [] :
                                        [
                                            fixer.replaceTextRange([
                                                // from
                                                node.range[0],
                                                // to
                                                node.property.range[0]
                                            ], "export const ")
                                        ]
                                )
                            ]
                        }
                    })
                }
            },
            Identifier(node) {
                if (!isModuleScope(context.getScope())) {
                    return;
                }
                if (doesIdentifierIsExports(node)) {
                    context.report({
                        node,
                        messageId: 'noCommonJSExports'
                    })
                }
            },
            // Collect all top-level variables to check if automatic fix is possible
            VariableDeclaration(node) {
                if (!isModuleScope(context.getScope())) {
                    return;
                }
                node.declarations.forEach(d => {
                    if (d.id.type === AST_NODE_TYPES.Identifier) {
                        topLevelVariablesSet.add(d.id.name);
                    }
                })
            },
        }
    }
})


function isModuleScope(scope: Scope.Scope) {
    return scope.variableScope.type === EScopeType.Module;
}

/** Detects cases like: `exports = {}` */
function doesIdentifierIsExports(node: TSESTree.Identifier) {
    return node.parent &&
        node.parent.type === AST_NODE_TYPES.AssignmentExpression &&
        node.parent.operator === '=' &&
        node.parent.parent?.type === AST_NODE_TYPES.ExpressionStatement &&
        node.parent.parent.parent?.type === AST_NODE_TYPES.Program &&
        node.parent.parent.parent?.sourceType === EScopeType.Module
}

/** Detects cases like: `exports.a = {}` */
function isMemberExpressionAnExports(node: TSESTree.MemberExpression) {
    return node.type === AST_NODE_TYPES.MemberExpression &&
        node.object.type === AST_NODE_TYPES.Identifier &&
        node.object.name === EXPORTS &&
        node.property &&
        node.property.type === AST_NODE_TYPES.Identifier
}