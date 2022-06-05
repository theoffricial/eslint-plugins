import type {
    TCamelToKebabCase,
    TSnakeCaseToKebabCase,
    TScopeType,
} from '../types';

type TFixedScopeType = {
    [key in Capitalize<TSnakeCaseToKebabCase<TScopeType>>]: TFixedKeys<key>;
};

type TFixedKeys<KEY extends string> = KEY extends 'TDZ'
    ? 'TDZ'
    : TCamelToKebabCase<Uncapitalize<KEY>>;

export const CEScopeType: TFixedScopeType = {
    TDZ: 'TDZ',
    Function: 'function',
    Block: 'block',
    Catch: 'catch',
    Class: 'class',
    For: 'for',
    Global: 'global',
    Module: 'module',
    Switch: 'switch',
    With: 'with',
    Enum: 'enum',
    FunctionExpressionName: 'function-expression-name',
    EmptyFunction: 'empty-function',
};
