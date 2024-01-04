import type {StylisticIssuesRules} from './types';
import {L} from '../utils';

const ARRAY_PATTERN_MAX_ITEMS_IN_SINGLELINE = 3;
const MAX_LINE_LENGTH = 120;
const MAX_DEPTH = 3;
const MAX_NESTED_CALLBACKS = 3;
const MAX_STATEMENTS_PER_LINE = 2;
const MAX_CHAINS_IN_SINGLELINE = 3;

const rules: StylisticIssuesRules = {
    'array-bracket-newline': ['warn', 'consistent'],
    'array-bracket-spacing': ['warn', 'never'],
    'array-element-newline': ['warn', {
        // @ts-expect-error: missing option in rule type
        ArrayExpression: 'consistent',
        ArrayPattern: {
            minItems: ARRAY_PATTERN_MAX_ITEMS_IN_SINGLELINE,
        },
    }],
    'block-spacing': ['warn', 'always'],
    'comma-style': ['warn', 'last'],
    // @ts-expect-error: missing option enforceForClassMembers in rule type
    'computed-property-spacing': ['warn', 'never', {
        enforceForClassMembers: true,
    }],
    'eol-last': ['warn', 'always'],
    'func-names': ['warn', 'as-needed'],
    'func-style': ['warn', 'declaration', {
        allowArrowFunctions: true,
    }],
    'function-call-argument-newline': ['warn', 'consistent'],
    'function-paren-newline': ['warn', 'multiline'],
    'key-spacing': ['warn', {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
    }],
    'linebreak-style': ['warn', 'unix'],
    'max-depth': ['warn', {
        max: MAX_DEPTH,
    }],
    'max-len': ['warn', {
        code: MAX_LINE_LENGTH,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
    }],
    'max-nested-callbacks': ['warn', {
        max: MAX_NESTED_CALLBACKS,
    }],
    'max-statements-per-line': ['warn', {
        max: MAX_STATEMENTS_PER_LINE,
    }],
    'multiline-ternary': ['warn', 'always-multiline'],
    'new-parens': ['error', 'always'],
    'newline-per-chained-call': ['warn', {
        ignoreChainWithDepth: MAX_CHAINS_IN_SINGLELINE,
    }],
    'no-lonely-if': 'error',
    'no-mixed-operators': ['error', {
        allowSamePrecedence: true,
        groups: [
            ['&', '|', '^', '~', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||', '??', '?:'],
            ['in', 'instanceof'],
        ],
    }],
    'no-mixed-spaces-and-tabs': 'warn',
    'no-multiple-empty-lines': ['warn', {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
    }],
    'no-negated-condition': 'warn',
    'no-tabs': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unneeded-ternary': ['warn', {
        defaultAssignment: false,
    }],
    'no-whitespace-before-property': 'warn',
    'object-curly-newline': ['warn', {
        multiline: true,
        consistent: true,
    }],
    'object-property-newline': ['warn', {
        allowAllPropertiesOnSameLine: true,
    }],
    'one-var': ['warn', {
        initialized: 'never',
        uninitialized: 'consecutive',
    }],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['warn', 'after', {
        overrides: {
            '?': 'before',
            ':': 'before',
        },
    }],
    'padded-blocks': ['warn', 'never'],
    'padding-line-between-statements': ['warn', {
        blankLine: 'always',
        prev: '*',
        next: 'class',
    }, {
        blankLine: 'always',
        prev: 'class',
        next: '*',
    }, {
        blankLine: 'always',
        prev: '*',
        next: 'function',
    }, {
        blankLine: 'always',
        prev: 'function',
        next: '*',
    }],
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'quote-props': ['warn', 'as-needed'],
    'semi-spacing': ['warn', {
        before: false,
        after: true,
    }],
    'semi-style': ['warn', 'last'],
    'space-before-blocks': ['warn', 'always'],
    'space-in-parens': ['warn', 'never'],
    'space-unary-ops': ['warn', {
        words: true,
        nonwords: false,
    }],
    'spaced-comment': ['warn', 'always', {
        exceptions: [],
        markers: [],
        line: {
            exceptions: ['-', '='],
            markers: ['/', '!', '@', '#'],
        },
        block: {
            exceptions: ['*', '@__INLINE__', '@__NOINLINE__', '@__PURE__'],
            markers: ['*'],
            balanced: true,
        },
    }],
    'switch-colon-spacing': ['warn', {
        before: false,
        after: true,
    }],
    'template-tag-spacing': ['error', 'never'],
    'implicit-arrow-linebreak': [L.Warn, 'below'],
    'new-cap': [L.Warn, {
        newIsCap: true,
        capIsNew: false,
        properties: true,
    }],
    'nonblock-statement-body-position': [L.Warn, 'beside'],
    'one-var-declaration-per-line': [L.Warn, 'initializations'],
    'capitalized-comments': L.Off,
    'consistent-this': L.Off,
    'func-name-matching': L.Off,
    'id-denylist': L.Off,
    'id-length': L.Off,
    'id-match': L.Off,
    'jsx-quotes': L.Off,
    'line-comment-position': L.Off,
    'lines-around-comment': L.Off,
    'max-lines': L.Off,
    'max-lines-per-function': L.Off,
    'max-params': L.Off,
    'max-statements': L.Off,
    'multiline-comment-style': L.Off,
    'no-bitwise': L.Off,
    'no-continue': L.Off,
    'no-inline-comments': L.Off,
    'no-multi-assign': L.Off,
    'no-nested-ternary': L.Off,
    'no-new-object': L.Off,
    'no-plusplus': L.Off,
    'no-ternary': L.Off,
    'no-underscore-dangle': L.Off,
    'sort-keys': L.Off,
    'sort-vars': L.Off,
    'unicode-bom': L.Off,
    'wrap-regex': L.Off,
    camelcase: L.Off,
};

export default rules;
