import type { TSESTree } from '@typescript-eslint/types';
import { eslintUtils } from '../shared/constants';

type TIsSpecificTokenFunction<SpecificToken extends TSESTree.Token> = (
    token: TSESTree.Token
) => token is SpecificToken;

type TIsNotSpecificTokenFunction<SpecificToken extends TSESTree.Token> = (
    token: TSESTree.Token
) => token is Exclude<TSESTree.Token, SpecificToken>;

type TPunctuatorTokenWithValue<Value extends string> =
    TSESTree.PunctuatorToken & { value: Value };

type TIsPunctuatorTokenWithValueFunction<Value extends string> =
    TIsSpecificTokenFunction<TPunctuatorTokenWithValue<Value>>;

type TIsNotPunctuatorTokenWithValueFunction<Value extends string> =
    TIsNotSpecificTokenFunction<TPunctuatorTokenWithValue<Value>>;

const isArrowToken =
    eslintUtils.isArrowToken as TIsPunctuatorTokenWithValueFunction<'=>'>;
const isNotArrowToken =
    eslintUtils.isNotArrowToken as TIsNotPunctuatorTokenWithValueFunction<'=>'>;

const isClosingBraceToken =
    eslintUtils.isClosingBraceToken as TIsPunctuatorTokenWithValueFunction<'}'>;
const isNotClosingBraceToken =
    eslintUtils.isNotClosingBraceToken as TIsNotPunctuatorTokenWithValueFunction<'}'>;

const isClosingBracketToken =
    eslintUtils.isClosingBracketToken as TIsPunctuatorTokenWithValueFunction<']'>;
const isNotClosingBracketToken =
    eslintUtils.isNotClosingBracketToken as TIsNotPunctuatorTokenWithValueFunction<']'>;

const isClosingParenToken =
    eslintUtils.isClosingParenToken as TIsPunctuatorTokenWithValueFunction<')'>;
const isNotClosingParenToken =
    eslintUtils.isNotClosingParenToken as TIsNotPunctuatorTokenWithValueFunction<')'>;

const isColonToken =
    eslintUtils.isColonToken as TIsPunctuatorTokenWithValueFunction<':'>;
const isNotColonToken =
    eslintUtils.isNotColonToken as TIsNotPunctuatorTokenWithValueFunction<':'>;

const isCommaToken =
    eslintUtils.isCommaToken as TIsPunctuatorTokenWithValueFunction<','>;
const isNotCommaToken =
    eslintUtils.isNotCommaToken as TIsNotPunctuatorTokenWithValueFunction<','>;

const isCommentToken =
    eslintUtils.isCommentToken as TIsSpecificTokenFunction<TSESTree.Comment>;
const isNotCommentToken =
    eslintUtils.isNotCommentToken as TIsNotSpecificTokenFunction<TSESTree.Comment>;

const isOpeningBraceToken =
    eslintUtils.isOpeningBraceToken as TIsPunctuatorTokenWithValueFunction<'{'>;
const isNotOpeningBraceToken =
    eslintUtils.isNotOpeningBraceToken as TIsNotPunctuatorTokenWithValueFunction<'{'>;

const isOpeningBracketToken =
    eslintUtils.isOpeningBracketToken as TIsPunctuatorTokenWithValueFunction<'['>;
const isNotOpeningBracketToken =
    eslintUtils.isNotOpeningBracketToken as TIsNotPunctuatorTokenWithValueFunction<'['>;

const isOpeningParenToken =
    eslintUtils.isOpeningParenToken as TIsPunctuatorTokenWithValueFunction<'('>;
const isNotOpeningParenToken =
    eslintUtils.isNotOpeningParenToken as TIsNotPunctuatorTokenWithValueFunction<'('>;

const isSemicolonToken =
    eslintUtils.isSemicolonToken as TIsPunctuatorTokenWithValueFunction<';'>;
const isNotSemicolonToken =
    eslintUtils.isNotSemicolonToken as TIsNotPunctuatorTokenWithValueFunction<';'>;

export {
    isArrowToken,
    isClosingBraceToken,
    isClosingBracketToken,
    isClosingParenToken,
    isColonToken,
    isCommaToken,
    isCommentToken,
    isNotArrowToken,
    isNotClosingBraceToken,
    isNotClosingBracketToken,
    isNotClosingParenToken,
    isNotColonToken,
    isNotCommaToken,
    isNotCommentToken,
    isNotOpeningBraceToken,
    isNotOpeningBracketToken,
    isNotOpeningParenToken,
    isNotSemicolonToken,
    isOpeningBraceToken,
    isOpeningBracketToken,
    isOpeningParenToken,
    isSemicolonToken,
};
