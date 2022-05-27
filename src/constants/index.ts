import { ScopeType } from "@typescript-eslint/utils/dist/ts-eslint-scope";
import type { CamelToSnakeCase, SnakeCaseToCamelCase } from "../shared/types";

type FixedScopeType = { [key in Capitalize<SnakeCaseToCamelCase<ScopeType>>]: FixedKeys<key> }

type FixedKeys<KEY extends string> =
    KEY extends "TDZ" ? "TDZ" : CamelToSnakeCase<Uncapitalize<KEY>>

export const EScopeType: FixedScopeType = {
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