import type {PossibleErrorsRules} from './types';
import {L} from '../utils';

const rules: PossibleErrorsRules = {
    'getter-return':             L.Error,
    'no-async-promise-executor': L.Error,
    'no-compare-neg-zero':       L.Error,
    'no-cond-assign':            [L.Warn, 'except-parens'],
    'no-console':                [L.Warn, {
        allow: ['count', 'countReset', 'dir', 'trace', 'table', 'time', 'timeLog', 'timeEnd'],
    }],
    'no-debugger':       L.Warn,
    'no-dupe-else-if':   L.Error,
    'no-dupe-keys':      L.Error,
    'no-duplicate-case': L.Error,
    'no-empty':          [L.Warn, {
        allowEmptyCatch: true,
    }],
    'no-irregular-whitespace': [L.Error, {
        skipComments:  true,
        skipStrings:   true,
        skipTemplates: true,
        skipRegExps:   true,
    }],
    'no-misleading-character-class': L.Error,
    'no-prototype-builtins':         L.Error,
    'no-template-curly-in-string':   L.Warn,
    'no-unexpected-multiline':       L.Error,
    'no-unreachable-loop':           L.Error,
    'no-unsafe-finally':             L.Error,
    // @ts-expect-error: missed enforceForOrderingRelations option in rule type
    'no-unsafe-negation':            [L.Error, {
        enforceForOrderingRelations: true,
    }],
    // @ts-expect-error: missed enforceForSwitchCase & enforceForIndexOf options in rule type
    'use-isnan': [L.Error, {
        enforceForSwitchCase: true,
        enforceForIndexOf:    true,
    }],
    'no-ex-assign':                L.Error,
    'no-func-assign':              L.Error,
    'no-import-assign':            L.Error,
    'no-setter-return':            L.Error,
    'no-unsafe-optional-chaining': [L.Error, {
        disallowArithmeticOperators: true,
    }],
    'valid-typeof': [L.Error, {
        requireStringLiterals: true,
    }],
    'no-useless-backreference':   L.Warn,
    'for-direction':              L.Off,
    'no-await-in-loop':           L.Off,
    'no-constant-condition':      L.Off,
    'no-control-regex':           L.Off,
    'no-dupe-args':               L.Off,
    'no-empty-character-class':   L.Off,
    'no-extra-boolean-cast':      L.Off,
    'no-inner-declarations':      L.Off,
    'no-invalid-regexp':          L.Off,
    'no-obj-calls':               L.Off,
    'no-promise-executor-return': L.Off,
    'no-regex-spaces':            L.Off,
    'no-sparse-arrays':           L.Off,
    'no-unreachable':             L.Off,
    'require-atomic-updates':     L.Off,
};

export default rules;
