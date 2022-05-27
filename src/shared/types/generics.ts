type Separator = ' ' | '-' | '_';
type SnakeCaseSeparator = '-'
// type SnakeToCamelCase<S extends string> =
//     S extends `${infer T}${Separator}${infer U}` ?
//     `${Lowercase<T>}${Capitalize<SnakeToCamelCase<U>>}` :
//     S

export type CamelToSnakeCase<S extends string> =
    S extends `${infer T}${infer U}` ?
    `${T extends Capitalize<T> ? SnakeCaseSeparator : ""}${Lowercase<T>}${CamelToSnakeCase<U>}` :
    S

export type SnakeCaseToCamelCase<T extends string> =
    T extends `${Separator}${infer Suffix}`
    ? SnakeCaseToCamelCase<Suffix>
    : T extends `${infer Prefix}${Separator}`
    ? SnakeCaseToCamelCase<Prefix>
    : T extends `${infer Prefix}${Separator}${infer Suffix}`
    ? SnakeCaseToCamelCase<`${Prefix}${Capitalize<Suffix>}`>
    : T;