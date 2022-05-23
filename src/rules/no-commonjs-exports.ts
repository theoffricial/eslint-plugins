import { AST_NODE_TYPES, TSESTree } from "@typescript-eslint/types";
import { createRule, ruleMessageTemplate } from "../util";

export type Options = [];
export type MessageIds = 'noCommonJSExports';

const topLevelVariablesSet = new Set<string>()

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
                why: 'TypeScript is recommending to use the ESM (ECMAScript Modules)',
                linterMessage: 'Calls to CommonJS "exports" should be replaced with ESM "export" syntax.'
            })
        },
        schema: [],

    },
    create(context) {
        return {
            AssignmentExpression(node) {
                if (isAssignment(node)) {
                    if (isExportsAssigned(node)) {
                        context.report({
                            node,
                            messageId: 'noCommonJSExports'
                        })
                    } else if (isExportsPropertyAssigned(node)) {
                        const nodeLeft = node.left as TSESTree.MemberExpression
                        // const nodeLeft = 
                        const nodeLeftPropIdentifier = nodeLeft.property as TSESTree.Identifier
                        context.report({
                            node,
                            messageId: 'noCommonJSExports',
                            fix(fixer) {
                                return [
                                    ...(
                                        // should fix only for modules
                                        !isExportsFromModule(node) ||
                                            // and only if no variable existsZ
                                            topLevelVariablesSet.has(nodeLeftPropIdentifier.name) ?
                                            [] :
                                            [
                                                fixer.replaceTextRange([
                                                    // from
                                                    nodeLeft.range[0],
                                                    // to
                                                    nodeLeft.property.range[0]
                                                ], "export const ")
                                            ]
                                    )
                                ]
                            }
                        })
                    }
                } else {
                    return;
                }
            },
            // Collection all top-level variables to understand if automatic fix is possible
            VariableDeclaration(node) {
                if (!node.parent || !node.parent || node.parent.type !== AST_NODE_TYPES.Program) {
                    return;
                } else if (node.parent.sourceType !== 'module') {
                    // only for module scripts
                    return;
                }
                else if (node && node.type === AST_NODE_TYPES.VariableDeclaration) {
                    node.declarations.forEach(d => {
                        if (d.id.type === AST_NODE_TYPES.Identifier) {
                            topLevelVariablesSet.add(d.id.name);
                        }
                    })
                }
            },
        }
    }
})

const EXPORTS = "exports"

/** Verifies the AssignmentStatement */
function isAssignment(node: TSESTree.AssignmentExpression) {
    return node &&
        node.operator === '=' &&
        node.left
}

/** Detects cases like: `exports = {}` */
function isExportsAssigned(node: TSESTree.AssignmentExpression) {
    return node.left.type === AST_NODE_TYPES.Identifier &&
        node.left.name === EXPORTS
}

/** Detects cases like: `exports.a = {}` */
function isExportsPropertyAssigned(node: TSESTree.AssignmentExpression) {
    return node.left.type === AST_NODE_TYPES.MemberExpression &&
        node.left.object.type === AST_NODE_TYPES.Identifier &&
        node.left.object.name === EXPORTS &&
        node.left.property &&
        node.left.property.type === AST_NODE_TYPES.Identifier
}

/** Check if `exports.a = {}` or `exports = {}` is sourceType='module' */
function isExportsFromModule(node: TSESTree.AssignmentExpression) {
    return node.parent && node.parent.parent && node.parent.parent.type === AST_NODE_TYPES.Program && node.parent.parent.sourceType === 'module'
}