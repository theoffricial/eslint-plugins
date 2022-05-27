import type { ScopeType } from "@typescript-eslint/utils/dist/ts-eslint-scope";
import type { TCamelToSnakeCase, TSnakeCaseToCamelCase } from "../shared/types";

type TFixedScopeType = { [key in Capitalize<TSnakeCaseToCamelCase<ScopeType>>]: TFixedKeys<key> }

type TFixedKeys<KEY extends string> =
    KEY extends "TDZ" ? "TDZ" : TCamelToSnakeCase<Uncapitalize<KEY>>

export const CEScopeType: TFixedScopeType = {
    TDZ: "TDZ",
    Function: "function",
    Block: "block",
    Catch: "catch",
    Class: "class",
    For: "for",
    Global: "global",
    Module: "module",
    Switch: "switch",
    With: "with",
    Enum: "enum",
    FunctionExpressionName: "function-expression-name",
    EmptyFunction: "empty-function"
}