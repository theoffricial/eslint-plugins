import { ScopeType } from "@typescript-eslint/utils/dist/ts-eslint-scope";

type FixedScopeType = { [key in Capitalize<SnakeCaseToCamelCase<ScopeType>>]: FixedKeys<key> }

type Separator = ' ' | '-' | '_';
// type SnakeToCamelCase<S extends string> =
//     S extends `${infer T}${Separator}${infer U}` ?
//     `${Lowercase<T>}${Capitalize<SnakeToCamelCase<U>>}` :
//     S

type CamelToSnakeCase<S extends string> =
    S extends `${infer T}${infer U}` ?
    `${T extends Capitalize<T> ? "-" : ""}${Lowercase<T>}${CamelToSnakeCase<U>}` :
    S

type FixedKeys<K extends string> =
    K extends "TDZ" ? "TDZ" : CamelToSnakeCase<Uncapitalize<K>>

type SnakeCaseToCamelCase<T extends string> =
    T extends `${Separator}${infer Suffix}`
    ? SnakeCaseToCamelCase<Suffix>
    : T extends `${infer Prefix}${Separator}`
    ? SnakeCaseToCamelCase<Prefix>
    : T extends `${infer Prefix}${Separator}${infer Suffix}`
    ? SnakeCaseToCamelCase<`${Prefix}${Capitalize<Suffix>}`>
    : T;

const x: SnakeCaseToCamelCase<'sadsads-asdasd-asdsa'> = 'sadsadsAsdasdAsdsa'
// type CamelCasedProps<T> = { [K in keyof T as `${CamelCase<string & K>}`]: T[K] }


// const x: TestCamelToSnakeCase<"hello"> = 'hello'
// const x: TestCamelToSnakeCase<'asdasd-asdasds-adsds'> = 'asdas-asdasds-adsds'
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