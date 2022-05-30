type TSeparator = ' ' | '_' | '-';

type TKebabCaseSeparator = '-';
// type SnakeToCamelCase<S extends string> =
//     S extends `${infer T}${Separator}${infer U}` ?
//     `${Lowercase<T>}${Capitalize<SnakeToCamelCase<U>>}` :
//     S
export type TCamelToKebabCase<S extends string> =
    S extends `${infer T}${infer U}`
        ? `${T extends Capitalize<T>
              ? TKebabCaseSeparator
              : ''}${Lowercase<T>}${TCamelToKebabCase<U>}`
        : S;

export type TSnakeCaseToKebabCase<S extends string> =
    S extends `${TSeparator}${infer Suffix}`
        ? TSnakeCaseToKebabCase<Suffix>
        : S extends `${infer Prefix}${TSeparator}`
        ? TSnakeCaseToKebabCase<Prefix>
        : S extends `${infer Prefix}${TSeparator}${infer Suffix}`
        ? TSnakeCaseToKebabCase<`${Prefix}${Capitalize<Suffix>}`>
        : S;
