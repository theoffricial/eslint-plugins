// eslint-disable-next-line import/no-internal-modules
import type { ScopeType } from '@typescript-eslint/utils/dist/ts-eslint-scope';
import type { TCamelToKebabCase, TSnakeCaseToKebabCase } from '../types';

type TFixedScopeType = {
    [key in Capitalize<TSnakeCaseToKebabCase<ScopeType>>]: TFixedKeys<key>;
};

type TFixedKeys<KEY extends string> = KEY extends 'TDZ'
    ? 'TDZ'
    : TCamelToKebabCase<Uncapitalize<KEY>>;

export const CE_ScopeType: TFixedScopeType = {
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
