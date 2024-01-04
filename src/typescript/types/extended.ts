import type {Linter} from 'eslint';
import type {ExtendedFromTypescriptPluginRules as ESLintRules} from '../../eslint-base/types';
import type {PrefixedRuleSet, RuleWithConfig} from '../../utils';

type GetESLintRuleOptions<R extends keyof ESLintRules, N extends 0 | 1 = 0>
    = ESLintRules[R] extends Linter.RuleEntry<infer Options> ? Options[N] : never;
type MergeRules<R extends keyof ESLintRules, Conf extends Record<string, unknown>>
    = RuleWithConfig<GetESLintRuleOptions<R> & Conf>;

export type TypescriptExtRules = PrefixedRuleSet<'@typescript-eslint', {
    'brace-style':  ESLintRules['brace-style'];
    'comma-dangle': Linter.RuleEntry<[Extract<GetESLintRuleOptions<'comma-dangle'>, string> | Partial<{
        enums:    Extract<GetESLintRuleOptions<'comma-dangle'>, string>;
        generics: Extract<GetESLintRuleOptions<'comma-dangle'>, string>;
        tuples:   Extract<GetESLintRuleOptions<'comma-dangle'>, string>;
    } & Extract<GetESLintRuleOptions<'comma-dangle'>, Record<string, unknown>>>]>;

    'comma-spacing':      ESLintRules['comma-spacing'];
    'default-param-last': ESLintRules['default-param-last'];
    'dot-notation':       MergeRules<'dot-notation', {
        allowPrivateClassPropertyAccess:   boolean;
        allowProtectedClassPropertyAccess: boolean;
    }>;

    'func-call-spacing':           ESLintRules['func-call-spacing'];
    'indent':                      ESLintRules['indent'];
    'init-declarations':           ESLintRules['init-declarations'];
    'keyword-spacing':             ESLintRules['keyword-spacing'];
    'lines-between-class-members': Linter.RuleEntry<[
        GetESLintRuleOptions<'lines-between-class-members'>,
        GetESLintRuleOptions<'lines-between-class-members', 1> & {
            exceptAfterOverload?: boolean;
        },
    ]>;

    'no-array-constructor':  ESLintRules['no-array-constructor'];
    'no-dupe-class-members': ESLintRules['no-dupe-class-members'];
    'no-empty-function':     RuleWithConfig<{
        allow: (
            | NonNullable<NonNullable<GetESLintRuleOptions<'no-empty-function'>>['allow']>[number]
            | 'private-constructors'
            | 'protected-constructors'
            | 'decoratedFunctions'
        )[];
    }>;

    'no-extra-parens':      ESLintRules['no-extra-parens'];
    'no-extra-semi':        ESLintRules['no-extra-semi'];
    'no-implied-eval':      ESLintRules['no-implied-eval'];
    'no-invalid-this':      ESLintRules['no-invalid-this'];
    'no-loop-func':         ESLintRules['no-loop-func'];
    'no-loss-of-precision': ESLintRules['no-loss-of-precision'];
    'no-magic-numbers':     MergeRules<'no-magic-numbers', {
        ignoreEnums:                   boolean;
        ignoreNumericLiteralTypes:     boolean;
        ignoreReadonlyClassProperties: boolean;
    }>;

    'no-redeclare': MergeRules<'no-redeclare', {
        ignoreDeclarationMerge: boolean;
    }>;
    'no-shadow':    MergeRules<'no-shadow', {
        ignoreTypeValueShadow:                      boolean;
        ignoreFunctionTypeParameterNameValueShadow: boolean;
    }>;

    'no-throw-literal':      ESLintRules['no-throw-literal'];
    'no-unused-expressions': ESLintRules['no-unused-expressions'];
    'no-unused-vars':        ESLintRules['no-unused-vars'];
    'no-use-before-define':  Linter.RuleEntry<[GetESLintRuleOptions<'no-use-before-define'> & Partial<{
        enums:                boolean;
        typedefs:             boolean;
        ignoreTypeReferences: boolean;
    }>]>;

    'no-useless-constructor':      ESLintRules['no-useless-constructor'];
    'object-curly-spacing':        ESLintRules['object-curly-spacing'];
    'quotes':                      ESLintRules['quotes'];
    'require-await':               ESLintRules['require-await'];
    'return-await':                ESLintRules['return-await'];
    'semi':                        ESLintRules['semi'];
    'space-before-function-paren': ESLintRules['space-before-function-paren'];
    'space-infix-ops':             ESLintRules['space-infix-ops'];
    'class-methods-use-this':      Linter.RuleEntry<[GetESLintRuleOptions<'class-methods-use-this'> & {
        ignoreOverrideMethods?: boolean;
        ignoreClassesThatImplementAnInterface?: boolean | 'public-fields';
    }]>;
    'max-params': ESLintRules['max-params'];
    'no-restricted-imports': ESLintRules['no-restricted-imports'];
    'prefer-destructuring': ESLintRules['prefer-destructuring'];
}>;
