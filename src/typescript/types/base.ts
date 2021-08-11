import type {Linter} from 'eslint';
import type {MemberOrderingRule} from './member-ordering';
import type {NamingConventionRule} from './naming-convention';
import type {PrefixedRuleSet} from '../../utils';

type ArrayTypeOption = 'array' | 'generic' | 'array-simple';
type BanTSCommentOption = boolean | 'allow-with-description';
type ExplicitMemberAccessibilityLevelOption = 'explicit' | 'no-public' | 'off';
type MemberDelimiterStyleOption = {
    multiline?: {
        delimiter?: 'none' | 'semi' | 'comma';
        requireLast?: boolean;
    };
    singleline?: {
        delimiter?: 'semi' | 'comma';
        requireLast?: boolean;
    };
};
type TypeAnnotationSpacingOption = {
    before?: boolean;
    after?: boolean;
};

export type TypescriptRules = PrefixedRuleSet<'@typescript-eslint', {
    'adjacent-overload-signatures': Linter.RuleEntry;
    'array-type': Linter.RuleEntry<[{
        default: ArrayTypeOption;
        readonly?: ArrayTypeOption;
    }]>;
    'await-thenable': Linter.RuleEntry;
    'ban-ts-comment': Linter.RuleEntry<[{
        'ts-expect-error'?: BanTSCommentOption;
        'ts-ignore'?: BanTSCommentOption;
        'ts-nocheck'?: BanTSCommentOption;
        'ts-check'?: BanTSCommentOption;
        minimumDescriptionLength?: number;
    }]>;
    'ban-tslint-comment': Linter.RuleEntry;
    'ban-types': Linter.RuleEntry<[{
        types?: Record<string, false | string | {
            message: string;
            fixWith?: string;
        }>;
        extendDefaults?: boolean;
    }]>;
    'class-literal-property-style': Linter.RuleEntry<['fields' | 'getters']>;
    'consistent-indexed-object-style': Linter.RuleEntry<['record' | 'index-signature']>;
    'consistent-type-assertions': Linter.RuleEntry<[{
        assertionStyle: 'as' | 'angle-bracket';
        objectLiteralTypeAssertions: 'allow' | 'allow-as-parameter' | 'never';
    } | {
        assertionStyle: 'never';
    }]>;
    'consistent-type-definitions': Linter.RuleEntry<['type' | 'interface']>;
    'consistent-type-imports': Linter.RuleEntry<[{
        prefer: 'type-imports' | 'no-type-imports';
        disallowTypeAnnotations: boolean;
    }]>;
    'explicit-function-return-type': Linter.RuleEntry<[{
        allowExpressions?: boolean;
        allowTypedFunctionExpressions?: boolean;
        allowHigherOrderFunctions?: boolean;
        allowDirectConstAssertionInArrowFunctions?: boolean;
        allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean;
    }]>;
    'explicit-member-accessibility':  Linter.RuleEntry<[{
        accessibility?: ExplicitMemberAccessibilityLevelOption;
        ignoredMethodNames?: string[];
        overrides?: {
            accessors?: ExplicitMemberAccessibilityLevelOption;
            constructors?: ExplicitMemberAccessibilityLevelOption;
            methods?: ExplicitMemberAccessibilityLevelOption;
            properties?: ExplicitMemberAccessibilityLevelOption;
            parameterProperties?: ExplicitMemberAccessibilityLevelOption;
        };
    }]>;
    'explicit-module-boundary-types': Linter.RuleEntry<[{
        allowArgumentsExplicitlyTypedAsAny?: boolean;
        allowDirectConstAssertionInArrowFunctions?: boolean;
        allowedNames?: string[];
        allowHigherOrderFunctions?: boolean;
        allowTypedFunctionExpressions?: boolean;
    }]>;
    'member-delimiter-style': Linter.RuleEntry<[MemberDelimiterStyleOption & {
        overrides?: {
            interface?: MemberDelimiterStyleOption;
            typeLiteral?: MemberDelimiterStyleOption;
        };
        multilineDetection?: 'brackets' | 'last-member';
    }]>;
    'method-signature-style': Linter.RuleEntry<['property' | 'method']>;
    'no-base-to-string': Linter.RuleEntry<[{
        ignoredTypeNames?: string[];
    }]>;
    'no-confusing-non-null-assertion': Linter.RuleEntry;
    'no-confusing-void-expression': Linter.RuleEntry<[{
        ignoreArrowShorthand?: boolean;
        ignoreVoidOperator?: boolean;
    }]>;
    'no-dynamic-delete': Linter.RuleEntry;
    'no-empty-interface': Linter.RuleEntry<[{
        allowSingleExtends?: boolean;
    }]>;
    'no-explicit-any': Linter.RuleEntry<[{
        fixToUnknown?: boolean;
        ignoreRestArgs?: boolean;
    }]>;
    'no-extra-non-null-assertion': Linter.RuleEntry;
    'no-extraneous-class': Linter.RuleEntry<[{
        allowConstructorOnly?: boolean;
        allowEmpty?: boolean;
        allowStaticOnly?: boolean;
        allowWithDecorator?: boolean;
    }]>;
    'no-floating-promises': Linter.RuleEntry<[{
        ignoreVoid?: boolean;
        ignoreIIFE?: boolean;
    }]>;
    'no-for-in-array': Linter.RuleEntry;
    'no-implicit-any-catch': Linter.RuleEntry<[{
        allowExplicitAny?: boolean;
    }]>;
    'no-inferrable-types': Linter.RuleEntry<[{
        ignoreParameters?: boolean;
        ignoreProperties?: boolean;
    }]>;
    'no-invalid-void-type': Linter.RuleEntry<[{
        allowInGenericTypeArguments?: boolean | string[];
        allowAsThisParameter?: boolean;
    }]>;
    'no-misused-new': Linter.RuleEntry;
    'no-misused-promises': Linter.RuleEntry<[{
        checksConditionals?: boolean;
        checksVoidReturn?: boolean;
    }]>;
    'no-namespace': Linter.RuleEntry<[{
        allowDeclarations?: boolean;
        allowDefinitionFiles?: boolean;
    }]>;
    'no-non-null-asserted-optional-chain': Linter.RuleEntry;
    'no-non-null-assertion': Linter.RuleEntry;
    'no-parameter-properties': Linter.RuleEntry<[{
        allows: ('readonly' | 'private' | 'protected' | 'public' | 'private readonly' | 'protected readonly' | 'public readonly')[];
    }]>;
    'no-require-imports': Linter.RuleEntry;
    'no-this-alias': Linter.RuleEntry<[{
        allowDestructuring?: boolean;
        allowedNames?: string[];
    }]>;
    'no-type-alias': Linter.RuleEntry<[{
        allowAliases?: 'always' | 'never' | 'in-unions' | 'in-intersections' | 'in-unions-and-intersections';
        allowCallbacks?: 'always' | 'never';
        allowConditionalTypes?: 'always' | 'never';
        allowConstructors?: 'always' | 'never';
        allowLiterals?: 'always' | 'never' | 'in-unions' | 'in-intersections' | 'in-unions-and-intersections';
        allowMappedTypes?: 'always' | 'never' | 'in-unions' | 'in-intersections' | 'in-unions-and-intersections';
        allowTupleTypes?: 'always' | 'never' | 'in-unions' | 'in-intersections' | 'in-unions-and-intersections';
    }]>;
    'no-unnecessary-boolean-literal-compare': Linter.RuleEntry<[{
        allowComparingNullableBooleansToTrue?: boolean;
        allowComparingNullableBooleansToFalse?: boolean;
    }]>;
    'no-unnecessary-condition': Linter.RuleEntry<[{
        allowConstantLoopConditions?: boolean;
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
    }]>;
    'no-unnecessary-qualifier': Linter.RuleEntry;
    'no-unnecessary-type-arguments': Linter.RuleEntry;
    'no-unnecessary-type-assertion': Linter.RuleEntry<[{
        typesToIgnore?: string[];
    }]>;
    'no-unnecessary-type-constraint': Linter.RuleEntry;
    'no-unsafe-assignment': Linter.RuleEntry;
    'no-unsafe-call': Linter.RuleEntry;
    'no-unsafe-member-access': Linter.RuleEntry;
    'no-unsafe-return': Linter.RuleEntry;
    'no-var-requires': Linter.RuleEntry;
    'non-nullable-type-assertion-style': Linter.RuleEntry;
    'prefer-as-const': Linter.RuleEntry;
    'prefer-enum-initializers': Linter.RuleEntry;
    'prefer-for-of': Linter.RuleEntry;
    'prefer-function-type': Linter.RuleEntry;
    'prefer-includes': Linter.RuleEntry;
    'prefer-literal-enum-member': Linter.RuleEntry;
    'prefer-namespace-keyword': Linter.RuleEntry;
    'prefer-nullish-coalescing': Linter.RuleEntry<[{
        ignoreConditionalTests?: boolean;
        ignoreMixedLogicalExpressions?: boolean;
    }]>;
    'prefer-optional-chain': Linter.RuleEntry;
    'prefer-readonly': Linter.RuleEntry<[{
        onlyInlineLambdas?: boolean;
    }]>;
    'prefer-readonly-parameter-types': Linter.RuleEntry<[{
        checkParameterProperties?: boolean;
        ignoreInferredTypes?: boolean;
    }]>;
    'prefer-reduce-type-parameter': Linter.RuleEntry;
    'prefer-regexp-exec': Linter.RuleEntry;
    'prefer-string-starts-ends-with': Linter.RuleEntry;
    'prefer-ts-expect-error': Linter.RuleEntry;
    'promise-function-async': Linter.RuleEntry<[{
        allowAny?: boolean;
        allowedPromiseNames?: boolean;
        checkArrowFunctions?: boolean;
        checkFunctionDeclarations?: boolean;
        checkFunctionExpressions?: boolean;
        checkMethodDeclarations?: boolean;
    }]>;
    'require-array-sort-compare': Linter.RuleEntry<[{
        ignoreStringArrays?: boolean;
    }]>;
    'restrict-plus-operands': Linter.RuleEntry<[{
        checkCompoundAssignments?: boolean;
    }]>;
    'restrict-template-expressions': Linter.RuleEntry<[{
        allowNumber?: boolean;
        allowBoolean?: boolean;
        allowAny?: boolean;
        allowNullish?: boolean;
    }]>;
    'sort-type-union-intersection-members': Linter.RuleEntry<[{
        checkIntersections?: boolean;
        checkUnions?: boolean;
        groupOrder?: (
            | 'conditional'
            | 'function'
            | 'import'
            | 'intersection'
            | 'keyword'
            | 'literal'
            | 'named'
            | 'object'
            | 'operator'
            | 'tuple'
            | 'union'
            | 'nullish'
        )[];
    }]>;
    'strict-boolean-expressions': Linter.RuleEntry<[{
        allowString?: boolean;
        allowNumber?: boolean;
        allowNullableObject?: boolean;
        allowNullableBoolean?: boolean;
        allowNullableString?: boolean;
        allowNullableNumber?: boolean;
        allowAny?: boolean;
    }]>;
    'switch-exhaustiveness-check': Linter.RuleEntry;
    'triple-slash-reference': Linter.RuleEntry<[{
        path?: 'always' | 'never';
        types?: 'always' | 'never' | 'prefer-import';
        lib?: 'always' | 'never';
    }]>;
    'type-annotation-spacing': Linter.RuleEntry<[TypeAnnotationSpacingOption & {
        overrides: {
            colon: TypeAnnotationSpacingOption;
            arrow: TypeAnnotationSpacingOption;
        };
    }]>;
    'typedef': Linter.RuleEntry<[{
        arrayDestructuring?: boolean;
        arrowParameter?: boolean;
        memberVariableDeclaration?: boolean;
        objectDestructuring?: boolean;
        parameter?: boolean;
        propertyDeclaration?: boolean;
        variableDeclaration?: boolean;
        variableDeclarationIgnoreFunction?: boolean;
    }]>;
    'unbound-method': Linter.RuleEntry<[{
        ignoreStatic?: boolean;
    }]>;
    'unified-signatures': Linter.RuleEntry;
}> & NamingConventionRule & MemberOrderingRule;
