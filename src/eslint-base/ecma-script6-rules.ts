import type {ECMAScript6Rules} from './types';
import {L} from '../utils';

const rules: ECMAScript6Rules = {
    'arrow-body-style': [L.Error, 'as-needed'],
    'arrow-parens':     [L.Error, 'as-needed'],
    // @ts-expect-error: missed before & after options in rule type
    'arrow-spacing':    [L.Warn, {
        before: true,
        after:  true,
    }],
    'constructor-super':      L.Error,
    'generator-star-spacing': [L.Warn, {
        before: false,
        after:  true,
        method: {
            before: true,
            after:  false,
        },
    }],
    'no-class-assign':         L.Error,
    'no-confusing-arrow':      L.Error,
    'no-const-assign':         L.Error,
    'no-new-symbol':           L.Error,
    'no-this-before-super':    L.Error,
    // @ts-expect-error: missed enforceForClassMembers option in rule type
    'no-useless-computed-key': [L.Error, {
        enforceForClassMembers: true,
    }],
    'no-useless-rename': L.Error,
    'no-var':            L.Error,
    'object-shorthand':  [L.Error, 'always', {
        avoidExplicitReturnArrows: true,
    }],
    'prefer-arrow-callback': [L.Error, {
        allowNamedFunctions: true,
        allowUnboundThis:    true,
    }],
    'prefer-const':         L.Error,
    'prefer-destructuring': [L.Error, {
        VariableDeclarator: {
            array:  true,
            object: true,
        },
        AssignmentExpression: {
            array:  true,
            object: false,
        },
    }, {
        enforceForRenamedProperties: false,
    }],
    'prefer-numeric-literals': L.Error,
    'prefer-rest-params':      L.Error,
    'prefer-spread':           L.Error,
    'prefer-template':         L.Error,
    'require-yield':           L.Error,
    'rest-spread-spacing':     [L.Error, 'never'],
    'template-curly-spacing':  [L.Error, 'never'],
    'yield-star-spacing':      [L.Error, 'after'],
    'no-duplicate-import':     L.Off,
    'sort-imports':            L.Off,
    'symbol-description':      L.Off,
};

export default rules;
