import { Scope } from '@typescript-eslint/utils/dist/ts-eslint';
import { createRule, ruleMessageTemplate } from '../util';
import { EScopeType } from "../constants";

export type Options = [];
export type MessageIds = 'noExportDefault';

function isModuleScope(scope: Scope.Scope) {
    return scope.variableScope.type === EScopeType.Module;
}

export default createRule<Options, MessageIds>({
    defaultOptions: [],
    name: 'no-dynamic-import',

    meta: {
        type: 'suggestion',
        docs: {
            description: 'Using this rule to disable the use of dynamic require for CommonJS or ESM import.',
            recommended: false
        },
        messages: {
            noExportDefault: ruleMessageTemplate({
                linterMessage: 'using default export is not allowed',
                why: 'ESM export default causing inconsistent naming and confusion when project still using both ESM and CommonJS.'
            })
        },
        schema: [{}],
    },

    create(context) {

        const [] = context.options;

        return {
            ExportDefaultDeclaration(node) {
                if (isModuleScope(context.getScope())) {
                    context.report({
                        messageId: 'noExportDefault',
                        node,
                    })
                }
            },
        };
    },
})

