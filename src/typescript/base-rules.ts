import type {TypescriptRules} from './types/base';
import {L} from '../utils';

const rules: TypescriptRules = {
    '@typescript-eslint/adjacent-overload-signatures': L.Error,
    '@typescript-eslint/array-type':                   [L.Error, {
        default:  'array',
        readonly: 'array',
    }],
    '@typescript-eslint/await-thenable': L.Error,
    '@typescript-eslint/ban-ts-comment': [L.Error, {
        'ts-expect-error': 'allow-with-description',
    }],
    '@typescript-eslint/ban-tslint-comment': L.Error,
    '@typescript-eslint/ban-types':          [L.Error, {
        extendDefaults: true,
        types:          {},
    }],
    '@typescript-eslint/class-literal-property-style':    [L.Error, 'fields'],
    '@typescript-eslint/consistent-indexed-object-style': [L.Warn, 'record'],
    '@typescript-eslint/consistent-type-assertions':      [L.Error, {
        assertionStyle:              'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
    }],
    '@typescript-eslint/consistent-type-imports': [L.Error, {
        prefer:                  'type-imports',
        disallowTypeAnnotations: true,
    }],
    '@typescript-eslint/explicit-member-accessibility': [L.Error, {
        accessibility: 'explicit',
        overrides:     {
            constructors: 'no-public',
        },
    }],
    '@typescript-eslint/explicit-module-boundary-types': [L.Warn, {
        allowedNames: [],
    }],
    '@typescript-eslint/member-delimiter-style':       L.Error,
    '@typescript-eslint/method-signature-style':       [L.Error, 'method'],
    '@typescript-eslint/no-confusing-void-expression': [L.Warn, {
        ignoreArrowShorthand: true,
        ignoreVoidOperator:   true,
    }],
    '@typescript-eslint/no-empty-interface': [L.Warn, {
        allowSingleExtends: true,
    }],
    '@typescript-eslint/no-explicit-any': [L.Warn, {
        fixToUnknown:   true,
        ignoreRestArgs: true,
    }],
    '@typescript-eslint/no-extra-non-null-assertion': L.Error,
    '@typescript-eslint/no-extraneous-class':         L.Error,
    '@typescript-eslint/no-floating-promises':        [L.Warn, {
        ignoreVoid: true,
        ignoreIIFE: true,
    }],
    '@typescript-eslint/no-for-in-array':      L.Error,
    '@typescript-eslint/no-inferrable-types':  L.Warn,
    '@typescript-eslint/no-invalid-void-type': [L.Error, {
        allowInGenericTypeArguments: true,
        allowAsThisParameter:        true,
    }],
    '@typescript-eslint/no-misused-new':      L.Error,
    '@typescript-eslint/no-misused-promises': [L.Error, {
        checksVoidReturn: false,
    }],
    '@typescript-eslint/no-namespace': [L.Warn, {
        allowDeclarations:    true,
        allowDefinitionFiles: true,
    }],
    '@typescript-eslint/no-non-null-asserted-optional-chain':    L.Error,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': L.Warn,
    '@typescript-eslint/no-unnecessary-condition':               [L.Warn, {
        allowConstantLoopConditions: true,
    }],
    '@typescript-eslint/no-unnecessary-type-assertion':     L.Warn,
    '@typescript-eslint/no-unsafe-assignment':              L.Warn,
    '@typescript-eslint/no-unsafe-call':                    L.Warn,
    '@typescript-eslint/no-unsafe-member-access':           L.Warn,
    '@typescript-eslint/no-unsafe-return':                  L.Warn,
    '@typescript-eslint/non-nullable-type-assertion-style': L.Warn,
    '@typescript-eslint/prefer-as-const':                   L.Warn,
    '@typescript-eslint/prefer-for-of':                     L.Warn,
    '@typescript-eslint/prefer-function-type':              L.Warn,
    '@typescript-eslint/prefer-includes':                   L.Warn,
    '@typescript-eslint/prefer-literal-enum-member':        L.Warn,
    '@typescript-eslint/prefer-nullish-coalescing':         [L.Warn, {
        ignoreConditionalTests:        true,
        ignoreMixedLogicalExpressions: true,
    }],
    '@typescript-eslint/prefer-optional-chain':          L.Warn,
    '@typescript-eslint/prefer-readonly':                L.Warn,
    '@typescript-eslint/prefer-string-starts-ends-with': L.Error,
    '@typescript-eslint/prefer-ts-expect-error':         L.Warn,
    '@typescript-eslint/require-array-sort-compare':     [L.Error, {
        ignoreStringArrays: true,
    }],
    '@typescript-eslint/restrict-plus-operands': [L.Error, {
        checkCompoundAssignments: true,
    }],
    '@typescript-eslint/restrict-template-expressions': [L.Error, {
        allowNumber:  true,
        allowBoolean: true,
        allowAny:     false,
        allowNullish: false,
    }],
    '@typescript-eslint/strict-boolean-expressions': [L.Error, {
        allowAny:             false,
        allowNumber:          true,
        allowString:          true,
        allowNullableNumber:  false,
        allowNullableString:  false,
        allowNullableBoolean: true,
        allowNullableObject:  true,
    }],
    '@typescript-eslint/switch-exhaustiveness-check': L.Warn,
    '@typescript-eslint/type-annotation-spacing':     L.Error,
    '@typescript-eslint/unbound-method':              [L.Error, {
        ignoreStatic: true,
    }],
    '@typescript-eslint/unified-signatures':            L.Warn,
    '@typescript-eslint/explicit-function-return-type': [L.Off, {
        allowExpressions:                                     false,
        allowTypedFunctionExpressions:                        true,
        allowHigherOrderFunctions:                            true,
        allowDirectConstAssertionInArrowFunctions:            true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
    }],
    '@typescript-eslint/no-confusing-non-null-assertion': L.Warn,
    '@typescript-eslint/no-implicit-any-catch':           L.Error,
    '@typescript-eslint/no-this-alias':                   [L.Error, {
        allowDestructuring: true,
        allowedNames:       [],
    }],
    '@typescript-eslint/no-unnecessary-type-constraint': L.Error,
    '@typescript-eslint/naming-convention':              [
        L.Warn,
        {
            selector: 'default',
            format:   [
                'camelCase',
            ],
            leadingUnderscore: 'allowSingleOrDouble',
        },
        {
            selector: ['typeLike', 'enumMember'],
            format:   [
                'PascalCase',
            ],
        },
        {
            selector: 'variableLike',
            format:   [
                'camelCase',
            ],
            leadingUnderscore: 'allowSingleOrDouble',
        },
        {
            selector: 'memberLike',
            format:   [
                'camelCase',
                'PascalCase',
                'UPPER_CASE',
            ],
            leadingUnderscore: 'allowSingleOrDouble',
        },
        {
            selector: 'variable',
            format:   [
                'camelCase',
                'PascalCase',
                'UPPER_CASE',
            ],
            modifiers: [
                'const',
            ],
            leadingUnderscore: 'allowSingleOrDouble',
        },
        {
            selector: 'variable',
            format:   [
                'camelCase',
                'PascalCase',
                'snake_case',
                'UPPER_CASE',
            ],
            modifiers: [
                'destructured',
            ],
            leadingUnderscore: 'allowSingleOrDouble',
        },
    ],
    '@typescript-eslint/no-unnecessary-type-arguments':        L.Off,
    '@typescript-eslint/consistent-type-definitions':          L.Off,
    '@typescript-eslint/no-base-to-string':                    L.Off,
    '@typescript-eslint/no-dynamic-delete':                    L.Off,
    '@typescript-eslint/no-non-null-assertion':                L.Off,
    '@typescript-eslint/no-parameter-properties':              L.Off,
    '@typescript-eslint/no-require-imports':                   L.Off,
    '@typescript-eslint/no-type-alias':                        L.Off,
    '@typescript-eslint/no-unnecessary-qualifier':             L.Off,
    '@typescript-eslint/no-var-requires':                      L.Off,
    '@typescript-eslint/prefer-enum-initializers':             L.Off,
    '@typescript-eslint/prefer-namespace-keyword':             L.Off,
    '@typescript-eslint/prefer-readonly-parameter-types':      L.Off,
    '@typescript-eslint/prefer-reduce-type-parameter':         L.Off,
    '@typescript-eslint/prefer-regexp-exec':                   L.Off,
    '@typescript-eslint/promise-function-async':               L.Off,
    '@typescript-eslint/sort-type-union-intersection-members': L.Off,
    '@typescript-eslint/triple-slash-reference':               L.Off,
    '@typescript-eslint/typedef':                              L.Off,
    '@typescript-eslint/member-ordering':                      L.Off,
};

export default rules;
