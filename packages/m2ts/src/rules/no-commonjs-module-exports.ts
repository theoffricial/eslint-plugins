import type { TSESTree } from "@typescript-eslint/types";
import { AST_NODE_TYPES } from "@typescript-eslint/types";
import type { TSESLint } from "@typescript-eslint/utils";

import { createRule, ruleMessageTemplate } from "../util";

export type TOptions = [];
export type TMessageIds = "noCommonJsModuleExports";

/** This function checks for the "module.exports" */
function isModuleExports(node: TSESTree.MemberExpression): boolean {
  return Boolean(
    Boolean(node) &&
      node.object.type === AST_NODE_TYPES.Identifier &&
      node.object.name === "module" &&
      node.property.type === AST_NODE_TYPES.Identifier &&
      node.property.name === "exports"
  );
}

/** This function Checks if the scope is of type "module" and not script.
 * "script"'s "module.export" is ignored
 */
function isScopeAModule(scope: TSESLint.Scope.Scope) {
  return scope.variableScope.type === "module";
}

export default createRule<TOptions, TMessageIds>({
  defaultOptions: [],
  name: "no-commonjs-module-exports",
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Prefer ESM export or export default over syntax over CommonJS module.exports.",
      recommended: false,
    },
    messages: {
      noCommonJsModuleExports: ruleMessageTemplate({
        why: "Prefer ESM import/export syntax over CommonJS module.exports and require().",
        linterMessage:
          'Expected "export" or "export default" instead of "module.exports"',
      }),
    },
    schema: [],
  },

  create(context) {
    return {
      MemberExpression: function (node) {
        if (isModuleExports(node) && isScopeAModule(context.getScope())) {
          context.report({
            node,
            messageId: "noCommonJsModuleExports",
          });
        }
      },
    };
  },
});
