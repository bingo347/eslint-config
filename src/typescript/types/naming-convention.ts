import type {Linter} from 'eslint';
import type {PrefixedRuleSet} from '../../utils';

type NamingConventionSelector =
    | 'variable'
    | 'function'
    | 'parameter'
    | 'classProperty'
    | 'objectLiteralProperty'
    | 'typeProperty'
    | 'parameterProperty'
    | 'classMethod'
    | 'objectLiteralMethod'
    | 'typeMethod'
    | 'accessor'
    | 'enumMember'
    | 'class'
    | 'interface'
    | 'typeAlias'
    | 'enum'
    | 'typeParameter'
    | 'default'
    | 'variableLike'
    | 'memberLike'
    | 'typeLike'
    | 'property'
    | 'method';
type NamingConventionSelectorModifiers<S extends NamingConventionSelector> = {
    variable: 'const' | 'destructured' | 'global' | 'exported' | 'unused';
    function: 'global' | 'exported' | 'unused';
    parameter: 'destructured' | 'unused';
    classProperty: 'abstract' | 'private' | 'protected' | 'public' | 'readonly' | 'requiresQuotes' | 'static';
    objectLiteralProperty: 'public' | 'requiresQuotes';
    typeProperty: 'public' | 'readonly' | 'requiresQuotes';
    parameterProperty: 'private' | 'protected' | 'public' | 'readonly';
    classMethod: 'abstract' | 'private' | 'protected' | 'public' | 'requiresQuotes' | 'static';
    objectLiteralMethod: 'public' | 'requiresQuotes';
    typeMethod: 'public' | 'requiresQuotes';
    accessor: 'abstract' | 'private' | 'protected' | 'public' | 'requiresQuotes' | 'static';
    enumMember: 'requiresQuotes';
    class: 'abstract' | 'exported' | 'unused';
    interface: 'exported' | 'unused';
    typeAlias: 'exported' | 'unused';
    enum: 'exported' | 'unused';
    typeParameter: 'unused';
    default: never;
    variableLike: 'unused';
    memberLike: 'private' | 'protected' | 'public' | 'static' | 'readonly' | 'abstract' | 'requiresQuotes';
    typeLike: 'abstract' | 'unused';
    property: 'private' | 'protected' | 'public' | 'static' | 'readonly' | 'abstract' | 'requiresQuotes';
    method: 'private' | 'protected' | 'public' | 'static' | 'readonly' | 'abstract' | 'requiresQuotes';
}[S];
type NamingConventionSelectorTypes<S extends NamingConventionSelector> = {
    variable: 'boolean' | 'string' | 'number' | 'function' | 'array';
    function: never;
    parameter: 'boolean' | 'string' | 'number' | 'function' | 'array';
    classProperty: 'boolean' | 'string' | 'number' | 'function' | 'array';
    objectLiteralProperty: 'boolean' | 'string' | 'number' | 'function' | 'array';
    typeProperty: 'boolean' | 'string' | 'number' | 'function' | 'array';
    parameterProperty: 'boolean' | 'string' | 'number' | 'function' | 'array';
    classMethod: never;
    objectLiteralMethod: never;
    typeMethod: never;
    accessor: 'boolean' | 'string' | 'number' | 'function' | 'array';
    enumMember: never;
    class: never;
    interface: never;
    typeAlias: never;
    enum: never;
    typeParameter: never;
    default: never;
    variableLike: never;
    memberLike: never;
    typeLike: never;
    property: 'boolean' | 'string' | 'number' | 'function' | 'array';
    method: never;
}[S];
type NamingConventionFormat = null | (
    | 'camelCase'
    | 'strictCamelCase'
    | 'PascalCase'
    | 'StrictPascalCase'
    | 'snake_case'
    | 'UPPER_CASE'
)[];
type NamingConventionUnderscoreOption =
    | 'forbid'
    | 'require'
    | 'requireDouble'
    | 'allow'
    | 'allowDouble'
    | 'allowSingleOrDouble';

export type NamingConventionRule = PrefixedRuleSet<'@typescript-eslint', {
    'naming-convention': Linter.RuleEntry<{
        selector: NamingConventionSelector | NamingConventionSelector[];
        filter?: string | {
            regex: string;
            match: boolean;
        };
        modifiers?: NamingConventionSelectorModifiers<NamingConventionSelector>[];
        types?: NamingConventionSelectorTypes<NamingConventionSelector>[];
        format: NamingConventionFormat;
        custom?: {
            regex: string;
            match: boolean;
        };
        leadingUnderscore?: NamingConventionUnderscoreOption;
        trailingUnderscore?: NamingConventionUnderscoreOption;
        prefix?: string[];
        suffix?: string[];
    }[]>;
}>;
