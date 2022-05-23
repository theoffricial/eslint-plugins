import { TSESTree, AST_NODE_TYPES } from '@typescript-eslint/types';

import { createRule } from '../util';

export type Options = [];
export type MessageIds = 'noModuleExports';

function isModuleExports(node: any): boolean {
    // which type s this node??
    return node.object.name === 'module' && node.property.name === 'exports';
}

export default createRule<Options, MessageIds>({
    defaultOptions: [],
    name: 'no-module-exports',
    meta: {
        type: 'suggestion',
        docs: {
            description: `Prefer ESM export or export default over syntax over CommonJS module.exports.`,
            recommended: false,
        },
        messages: {
            noModuleExports:
                'Expected "export" or "export default" instead of "module.exports"',
        },
        schema: [],
    },

    create(context) {
        return {
            MemberExpression: function (node) {
                if (isModuleExports(node)) {
                    context.report({ node, messageId: 'noModuleExports' });
                }
            },
        };
    },
});
