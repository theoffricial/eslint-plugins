/**
 * @fileoverview Rule to enforce fields on every record update/insert
 * @author Ofri Peretz
 */

//  "use strict";

 //------------------------------------------------------------------------------
 // Rule Definition
 //------------------------------------------------------------------------------
 
 /** @typedef {import("estree").Node & NodeParentExtension} Node */
/** @typedef {{ parent: Node; }} NodeParentExtension */


/** 
 * @param {import('estree').ImportDeclaration & NodeParentExtension} node 
 * */
function isMongoImported(node, options) {
    return options.import.includes(node.source.value)
}

const $setOperator = "$set";
const $unsetOperator = "$unset";

const COLLECTION_UPDATE = ["updateOne", "updateMany"];
const member_exp_insert_one = "insertOne";
const member_exp_insert_many = "insertMany";
/**
 * @param {import("eslint").Rule.RuleContext} context
 * @param {string} calleePropertyName
 * @param {(import("estree").Expression | import("estree").SpreadElement)} argument
 * @param {string[]} requiredOption 
 */
function searchArgument(context, calleePropertyName, argument, requiredOption) {
    console.log('bla:', {calleePropertyName, argument, requiredOption})
    if (
        calleePropertyName === member_exp_insert_one && 
        argument.type === "ObjectExpression") {
            console.log('a')
        verifyMissingFields(context, argument, requiredOption);
    } else if (
        calleePropertyName === member_exp_insert_many && 
        argument.type === "ArrayExpression") {
        for (const elem of argument.elements) {
            if (elem.type !== "ObjectExpression") continue;
            verifyMissingFields(context, elem, requiredOption);
        }
    } 
    // else if (["updateOne", "updateMany"].includes(calleePropertyName)) {
        
    // }
}

// * @returns {import("eslint").Rule.ReportDescriptor}

/**
 * @param {import("eslint").Rule.RuleContext} context
 * @param {import("estree").ObjectExpression} node 
 * @param {string[]} requiredOption 
 */
function $set_exists(context, node, requiredOption) {
    for (const prop of node.properties) {
        if (prop.type === "Property") {
            const keyName = prop.key.name;

            if (keyName === $setOperator) {
                verifyMissingFields(context, prop.value, requiredOption);
            }
        }
    }
}

/**
 * @param {import("eslint").Rule.RuleContext} context
 * @param {import("estree").ObjectExpression} node 
 * @param {string[]} requiredOption 
 */
function $unset_exists_with_no_$set(context, node, requiredOption) {
    // const required = new Set(["$set"]);
    let hasSet = false;
    let hasUnset = false;
    for (const prop of node.properties) {
        if (prop.type === "Property") {
            const keyName = prop.key.name;
            
            if (keyName === $setOperator) {
                hasSet = true;
            } else if (keyName === $unsetOperator) {
                hasUnset = true;
            }
        }
    }

    if (hasUnset === true && hasSet === false) {
        context.report({
            node,
            message: `'$set' is missing with the following fields: ${requiredOption.join(', ')}`
        })
    }
}

/**
 * @param {import("eslint").Rule.RuleContext} context
 * @param {import("estree").ObjectExpression} node 
 * @param {string[]} requiredOption 
 */
function verifyMissingFields(context, node, requiredOption) {
    const set = new Set(requiredOption);
    for (const prop of node.properties) {
        if (prop.type === "Property") {
            const keyName = prop.key.name;

            if (set.has(keyName)) {
                set.delete(keyName); // e.g. "updatedAt"
            }
        }
    }
    if (set.size > 0) {
        const v = [...set.values()];
        // return {
            // }
            // console.log(JSON.stringify(v, null, 2))
            context.report({
                message: `The following DB properties are missing: '${v.join('\', \'')}'`,
                node,
                loc: node.loc,
        })
    }
}


/** @type {import("eslint").Rule.RuleModule} */
module.exports = {
    meta: {
        type: "suggestion",
        messages: {
            
        },
        docs: {
            description: "disallow unnecessary semicolons",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-extra-semi"
        },
        fixable: "code",
        schema: [{
        type: "object",
        properties: {
            "mongoImport": {type: "array", items: {type: "string"}, required: false},
            "collectionVariable": {type: "array", items: {type: "string"}, required: false},
            "required": {type: "array", items: {type: "string"}, required: false}
        }
        }] // no options
    },
    create: function (context) {
    const [{ mongoImport, collectionVariable, required } = {}] = context.options;
    const options = Object.assign({ 
        // normalize parameters
        import: mongoImport || ["xxx", "mongodb", "dbPool"], 
        collectionVariable: Array.isArray(collectionVariable) ? collectionVariable : ["collection", "c", "col"],
        required: required || ["updatedAt", "_updated_at"]
    });
    // console.log(JSON.stringify(context.options, null, 2));
    let moduleIncludesMongoImport = false;


    return {
        // callback functions
        ImportDeclaration: function (node) {
            moduleIncludesMongoImport = isMongoImported(node, options);
        },
        ExpressionStatement: function (node) {
            // no-op
            if (!moduleIncludesMongoImport) {
                return;
            }

            if (node.expression.type === "CallExpression") {
                const callExpression = node.expression;
                const expressionCallee = callExpression.callee;

                if (
                    expressionCallee.type === "MemberExpression" && 
                options.collectionVariable.includes(expressionCallee.object.name)) {

                    const callee_property_name = expressionCallee.property.name;
                    if (
                        callee_property_name === member_exp_insert_one
                    ) {
                        const arg0 = callExpression.arguments[0];
                        searchArgument(context, callee_property_name, arg0, options.required);
                    } else if (callee_property_name === member_exp_insert_many) {
                        const arg0 = callExpression.arguments[0];
                        searchArgument(context, callee_property_name, arg0, options.required);
                    } else if (COLLECTION_UPDATE.includes(expressionCallee.property.name)) {
                        const arg1 = callExpression.arguments[1];
                        $set_exists(context, arg1, options.required);
                        $unset_exists_with_no_$set(context, arg1, options.required);
                    }
                }
            }

        },
    };
    }
};