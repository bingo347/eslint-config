import type { TypescriptExtRules } from './types/extended';
import { L } from '../utils';

const rules: TypescriptExtRules = {
    '@typescript-eslint/brace-style': [L.Error, '1tbs', {
        allowSingleLine: true
    }],
    '@typescript-eslint/comma-dangle':       [L.Warn, 'always-multiline'],
    '@typescript-eslint/comma-spacing':      L.Warn,
    '@typescript-eslint/default-param-last': L.Error,
    '@typescript-eslint/dot-notation':       [L.Error, {
        allowKeywords:                     true,
        allowPrivateClassPropertyAccess:   true,
        allowProtectedClassPropertyAccess: true,
    }],
    '@typescript-eslint/func-call-spacing': [L.Error, 'never'],
    '@typescript-eslint/indent':            [L.Error, 4, {
        SwitchCase:          1,
        MemberExpression:    1,
        FunctionDeclaration: {
            body:       1,
            parameters: 1,
        },
        CallExpression: {
            arguments: 1,
        },
        ArrayExpression:        1,
        ObjectExpression:       1,
        ImportDeclaration:      1,
        flatTernaryExpressions: false,
        ignoreComments:         true,
    }],
    '@typescript-eslint/init-declarations':           [L.Warn, 'always'],
    '@typescript-eslint/keyword-spacing':             L.Warn,
    '@typescript-eslint/lines-between-class-members': [L.Warn, 'always'],
    '@typescript-eslint/no-array-constructor':        L.Error,
    '@typescript-eslint/no-dupe-class-members':       L.Error,
    '@typescript-eslint/no-duplicate-imports':        L.Error,
    '@typescript-eslint/no-empty-function':           [L.Warn, {
        allow: ['functions', 'methods', 'private-constructors', 'protected-constructors'],
    }],
    '@typescript-eslint/no-extra-semi':        L.Error,
    '@typescript-eslint/no-implied-eval':      L.Error,
    '@typescript-eslint/no-invalid-this':      L.Error,
    '@typescript-eslint/no-loop-func':         L.Error,
    '@typescript-eslint/no-loss-of-precision': L.Warn,
    '@typescript-eslint/no-magic-numbers':     [L.Warn, {
        enforceConst:                  true,
        detectObjects:                 true,
        ignoreEnums:                   true,
        ignoreNumericLiteralTypes:     true,
        ignoreReadonlyClassProperties: true,
        ignoreArrayIndexes:            true,
        ignore:                        [-1, 0, .25, .5, 1, 2, 4, 8, 10, 16, 100, 1000],
    }],
    '@typescript-eslint/no-redeclare': [L.Error, {
        ignoreDeclarationMerge: true,
    }],
    '@typescript-eslint/no-shadow': [L.Warn, {
        ignoreTypeValueShadow:                      true,
        ignoreFunctionTypeParameterNameValueShadow: false,
        hoist:                                      'all',
        allow:                                      [],
    }],
    '@typescript-eslint/no-throw-literal':      L.Error,
    '@typescript-eslint/no-unused-expressions': [L.Warn, {
        allowShortCircuit:    true,
        allowTernary:         true,
        allowTaggedTemplates: true,
    }],
    '@typescript-eslint/no-unused-vars': [L.Warn, {
        vars:               'all',
        args:               'all',
        caughtErrors:       'none',
        ignoreRestSiblings: true,
        argsIgnorePattern:  '^_',
    }],
    '@typescript-eslint/no-useless-constructor': L.Warn,
    '@typescript-eslint/object-curly-spacing':   [L.Warn, 'never'],
    '@typescript-eslint/quotes':                 [L.Error, 'single'],
    '@typescript-eslint/require-await':          L.Error,
    '@typescript-eslint/return-await':           [L.Error, 'never'],
    '@typescript-eslint/semi':                   [L.Error, 'always', {
        omitLastInOneLineBlock: true,
    }],
    '@typescript-eslint/space-before-function-paren': [L.Warn, {
        anonymous:  'never',
        named:      'never',
        asyncArrow: 'always',
    }],
    '@typescript-eslint/space-infix-ops': [L.Warn, {
        int32Hint: true,
    }],
    '@typescript-eslint/no-use-before-define': L.Off,
    "@typescript-eslint/no-extra-parens": L.Off,
};

export default rules;
