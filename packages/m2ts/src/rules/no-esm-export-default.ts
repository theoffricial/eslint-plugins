import { createRule, ruleMessageTemplate } from '../util';
import type { TScope } from '../shared/types';
import { CE_ScopeType } from '../shared/constants';

export type TOptions = [];
export type TMessageIds = 'noExportDefault';

function isModuleScope(scope: TScope.Scope) {
    return scope.variableScope.type === CE_ScopeType.Module;
}

export default createRule<TOptions, TMessageIds>({
    defaultOptions: [],
    name: 'no-esm-export-default',

    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Using this rule to disable the use of dynamic require for CommonJS or ESM import.',
            recommended: false,
        },
        messages: {
            noExportDefault: ruleMessageTemplate({
                linterMessage: 'using default export is not allowed',
                why: 'ESM export default causing inconsistent naming and confusion when project still using both ESM and CommonJS.',
            }),
        },
        schema: [{}],
    },

    create(context) {
        return {
            ExportDefaultDeclaration(node) {
                if (isModuleScope(context.getScope())) {
                    context.report({
                        messageId: 'noExportDefault',
                        node,
                    });
                }
            },
        };
    },
});
