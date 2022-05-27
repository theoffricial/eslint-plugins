type TSeparator = ' ' | '-' | '_';
type TSnakeCaseSeparator = '-'
// type SnakeToCamelCase<S extends string> =
//     S extends `${infer T}${Separator}${infer U}` ?
//     `${Lowercase<T>}${Capitalize<SnakeToCamelCase<U>>}` :
//     S

export type TCamelToSnakeCase<S extends string> =
    S extends `${infer T}${infer U}` ?
    `${T extends Capitalize<T> ? TSnakeCaseSeparator : ""}${Lowercase<T>}${TCamelToSnakeCase<U>}` :
    S

export type TSnakeCaseToCamelCase<S extends string> =
    S extends `${TSeparator}${infer Suffix}`
    ? TSnakeCaseToCamelCase<Suffix>
    : S extends `${infer Prefix}${TSeparator}`
    ? TSnakeCaseToCamelCase<Prefix>
    : S extends `${infer Prefix}${TSeparator}${infer Suffix}`
    ? TSnakeCaseToCamelCase<`${Prefix}${Capitalize<Suffix>}`>
    : S;