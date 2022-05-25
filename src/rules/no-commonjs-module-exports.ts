import { TSESTree, AST_NODE_TYPES } from '@typescript-eslint/types';
import { TSESLint } from '@typescript-eslint/utils';

import { createRule } from '../util';

export type Options = [];
export type MessageIds = 'noCommonJsModuleExports';

/** This function checks for the "module.exports" */
function isModuleExports(node: TSESTree.MemberExpression): boolean {
    return Boolean(
        node &&
            node.type === AST_NODE_TYPES.MemberExpression &&
            node.object.type === AST_NODE_TYPES.Identifier &&
            node.object.name === 'module' &&
            node.property.type === AST_NODE_TYPES.Identifier &&
            node.property.name === 'exports'
    );
}

/** This function Checks if the scope is of type "module" and not script.
 * "script"'s "module.export" is ignored
 */
function isScopeAModule(scope: TSESLint.Scope.Scope) {
    return scope.variableScope.type === 'module';
}

export default createRule<Options, MessageIds>({
    defaultOptions: [],
    name: 'no-commonjs-module-exports',
    meta: {
        type: 'suggestion',
        docs: {
            description: `Prefer ESM export or export default over syntax over CommonJS module.exports.`,
            recommended: false,
        },
        messages: {
            noCommonJsModuleExports:
                'Expected "export" or "export default" instead of "module.exports"',
        },
        schema: [],
    },

    create(context) {
        return {
            MemberExpression: function (node) {
                if (
                    isModuleExports(node) &&
                    isScopeAModule(context.getScope())
                ) {
                    context.report({
                        node,
                        messageId: 'noCommonJsModuleExports',
                    });
                }
            },
        };
    },
});
