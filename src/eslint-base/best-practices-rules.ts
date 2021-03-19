import type {BestPracticesRules} from './types';
import {L} from '../utils';

const COMPLEXITY_MAX_LEVEL = 5;

const rules: BestPracticesRules = {
    'array-callback-return': [L.Warn, {
        allowImplicit: true,
        // @ts-expect-error: missing option in rule type
        checkForEach:  false,
    }],
    'class-methods-use-this': [L.Error, {
        exceptMethods: [],
    }],
    complexity:               [L.Warn, COMPLEXITY_MAX_LEVEL],
    curly:                    [L.Error, 'all'],
    'default-case-last':      L.Error,
    'dot-location':           [L.Error, 'property'],
    eqeqeq:                   [L.Error, 'always'],
    'grouped-accessor-pairs': [L.Error, 'getBeforeSet'],
    'guard-for-in':           L.Warn,
    'no-caller':              L.Error,
    'no-case-declarations':   L.Error,
    'no-constructor-return':  L.Error,
    'no-div-regex':           L.Error,
    'no-else-return':         [L.Error, {
        allowElseIf: false,
    }],
    'no-empty-pattern': L.Warn,
    'no-extend-native': L.Error,
    'no-extra-bind':    L.Error,
    'no-fallthrough':   [L.Warn, {
        commentPattern: '\\bbreak\\b',
    }],
    'no-implicit-coercion': [L.Warn, {
        allow: ['!!', '+'],
    }],
    'no-multi-spaces': [L.Warn, {
        ignoreEOLComments: true,
        exceptions:        {
            Property:         true,
            TSTypeAnnotation: true,
            TSEnumMember:     true,
        },
    }],
    'no-octal':          L.Warn,
    'no-param-reassign': [L.Error, {
        props:                          true,
        ignorePropertyModificationsFor: [
            'acc', // usual name for .reduce accumulator
        ],
    }],
    'no-self-assign':               L.Error,
    'no-self-compare':              L.Error,
    'no-sequences':                 L.Warn,
    'no-unmodified-loop-condition': L.Error,
    'no-useless-call':              L.Error,
    'no-useless-catch':             L.Error,
    'no-useless-concat':            L.Error,
    'no-useless-escape':            L.Error,
    'no-with':                      L.Error,
    'prefer-regex-literals':        [L.Error, {
        disallowRedundantWrapping: true,
    }],
    radix:       [L.Error, 'always'],
    'wrap-iife': [L.Error, 'inside', {
        functionPrototypeMethods: true,
    }],
    'block-scoped-var': L.Error,
    'no-global-assign': [L.Error, {
        exceptions: [],
    }],
    'no-nonoctal-decimal-escape':   L.Error,
    'no-return-await':              L.Error,
    'prefer-promise-reject-errors': L.Error,
    'accessor-pairs':               L.Off,
    'consistent-return':            L.Off,
    'default-case':                 L.Off,
    'max-classes-per-file':         L.Off,
    'no-alert':                     L.Off,
    'no-eq-null':                   L.Off,
    'no-eval':                      L.Off,
    'no-extra-label':               L.Off,
    'no-floating-decimal':          L.Off,
    'no-implicit-globals':          L.Off,
    'no-iterator':                  L.Off,
    'no-labels':                    L.Off,
    'no-lone-blocks':               L.Off,
    'no-multi-str':                 L.Off,
    'no-new':                       L.Off,
    'no-new-func':                  L.Off,
    'no-new-wrappers':              L.Off,
    'no-octal-escape':              L.Off,
    'no-proto':                     L.Off,
    'no-return-assign':             L.Off,
    'no-script-url':                L.Off,
    'no-unused-labels':             L.Off,
    'no-useless-return':            L.Off,
    'no-void':                      L.Off,
    'no-warning-comments':          L.Off,
    'prefer-named-capture-group':   L.Off,
    'require-unicode-regexp':       L.Off,
    'vars-on-top':                  L.Off,
    yoda:                           L.Off,
};

export default rules;
