import { TSESTree, AST_NODE_TYPES } from "@typescript-eslint/types";

import { createRule } from "../util";
import docsUrl from "../docsUrl";

interface IOptionsObject {
    allowRequire?: boolean;
    allowConditionalRequire?: boolean;
}

function allowRequire(node: TSESTree.CallExpression, options: IOptionsObject) {
    return options.allowRequire;
}

function allowConditionalRequire(
    node: TSESTree.CallExpression,
    options: IOptionsObject
) {
    return options.allowConditionalRequire;
}

function isConditional(node: TSESTree.Node): boolean {
    if (
        node.type === AST_NODE_TYPES.IfStatement ||
        node.type === AST_NODE_TYPES.TryStatement ||
        node.type === AST_NODE_TYPES.LogicalExpression ||
        node.type === AST_NODE_TYPES.ConditionalExpression
    )
        return true;
    if (node.parent) return isConditional(node.parent);
    return false;
}

function isLiteralString(node: TSESTree.Node | null) {
    if (!node) return false;
    return (
        (node.type === AST_NODE_TYPES.Literal &&
            typeof node.value === "string") ||
        (node.type === AST_NODE_TYPES.TemplateLiteral &&
            node.expressions.length === 0)
    );
}

export default createRule({
    meta: {
        type: "suggestion",
        docs: {
            description: `Prefer ESM import/export syntax over CommonJS module.exports and require().
       Why? ESM is the standard for JavaScript modules, and is also much more readable compared to require().`,
            recommended: false,
            url: docsUrl("no-commonjs"),
        },
        // fixable: "code", - TODO?
        messages: {
            importMessage: 'Expected "export" or "export default"',
            exportMessage: 'Expected "import" instead of "require()"',
        },
        // TODO - we should think about which options to use in the options schema
        schema: [
            {
                type: "object",
                properties: {
                    allowRequire: { type: "boolean" },
                    allowConditionalRequire: { type: "boolean" },
                },
                additionalProperties: false,
            },
        ],
    },

    create(context) {
        const options = context.options[0] || {};

        return {
            MemberExpression(node: TSESTree.MemberExpression) {
                // module.exports
                if (
                    node.object.name === "module" &&
                    node.property.name === "exports"
                ) {
                    context.report({ node, messageId: "exportMessage" });
                }

                // exports
                if (node.object.name === "exports") {
                    const isInScope = context // ?
                        .getScope()
                        .variables.some(
                            (variable) => variable.name === "exports"
                        );
                    if (!isInScope) {
                        context.report({ node, messageId: "exportMessage" });
                    }
                }
            },
            CallExpression: function (call) {
                if (call.callee.type !== "Identifier") return;
                if (call.callee.name !== "require") return;

                if (call.arguments.length !== 1) return;
                if (!isLiteralString(call.arguments[0])) return; // Do we want 1 arg only or any arg?

                if (allowRequire(call, options)) return;

                if (
                    allowConditionalRequire(call, options) &&
                    isConditional(call.parent)
                )
                    return;

                // keeping it simple: all 1-string-arg `require` calls are reported
                context.report({
                    node: call.callee,
                    messageId: "importMessage",
                });
            },
        };
    },
});
