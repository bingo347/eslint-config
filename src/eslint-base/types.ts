import type {ESLintRules} from 'eslint/rules';

type PickESLintRules<R extends keyof ESLintRules> = Pick<ESLintRules, R>;

export type PossibleErrorsRules = PickESLintRules<
    | 'for-direction'
    | 'getter-return'
    | 'no-async-promise-executor'
    | 'no-await-in-loop'
    | 'no-compare-neg-zero'
    | 'no-cond-assign'
    | 'no-console'
    | 'no-constant-condition'
    | 'no-control-regex'
    | 'no-debugger'
    | 'no-dupe-args'
    | 'no-dupe-else-if'
    | 'no-dupe-keys'
    | 'no-duplicate-case'
    | 'no-empty'
    | 'no-empty-character-class'
    | 'no-ex-assign'
    | 'no-extra-boolean-cast'
    | 'no-func-assign'
    | 'no-import-assign'
    | 'no-inner-declarations'
    | 'no-invalid-regexp'
    | 'no-irregular-whitespace'
    | 'no-misleading-character-class'
    | 'no-obj-calls'
    | 'no-promise-executor-return'
    | 'no-prototype-builtins'
    | 'no-regex-spaces'
    | 'no-setter-return'
    | 'no-sparse-arrays'
    | 'no-template-curly-in-string'
    | 'no-unexpected-multiline'
    | 'no-unreachable'
    | 'no-unreachable-loop'
    | 'no-unsafe-finally'
    | 'no-unsafe-negation'
    | 'no-unsafe-optional-chaining'
    | 'no-useless-backreference'
    | 'require-atomic-updates'
    | 'use-isnan'
    | 'valid-typeof'
>;

export type BestPracticesRules = PickESLintRules<
    | 'accessor-pairs'
    | 'array-callback-return'
    | 'block-scoped-var'
    | 'class-methods-use-this'
    | 'complexity'
    | 'consistent-return'
    | 'curly'
    | 'default-case'
    | 'default-case-last'
    | 'dot-location'
    | 'eqeqeq'
    | 'grouped-accessor-pairs'
    | 'guard-for-in'
    | 'max-classes-per-file'
    | 'no-alert'
    | 'no-caller'
    | 'no-case-declarations'
    | 'no-constructor-return'
    | 'no-div-regex'
    | 'no-else-return'
    | 'no-empty-pattern'
    | 'no-eq-null'
    | 'no-eval'
    | 'no-extend-native'
    | 'no-extra-bind'
    | 'no-extra-label'
    | 'no-fallthrough'
    | 'no-floating-decimal'
    | 'no-global-assign'
    | 'no-implicit-coercion'
    | 'no-implicit-globals'
    | 'no-iterator'
    | 'no-labels'
    | 'no-lone-blocks'
    | 'no-multi-spaces'
    | 'no-multi-str'
    | 'no-new'
    | 'no-new-func'
    | 'no-new-wrappers'
    | 'no-nonoctal-decimal-escape'
    | 'no-octal'
    | 'no-octal-escape'
    | 'no-param-reassign'
    | 'no-proto'
    | 'no-return-assign'
    | 'no-return-await'
    | 'no-script-url'
    | 'no-self-assign'
    | 'no-self-compare'
    | 'no-sequences'
    | 'no-unmodified-loop-condition'
    | 'no-unused-labels'
    | 'no-useless-call'
    | 'no-useless-catch'
    | 'no-useless-concat'
    | 'no-useless-escape'
    | 'no-useless-return'
    | 'no-void'
    | 'no-warning-comments'
    | 'no-with'
    | 'prefer-named-capture-group'
    | 'prefer-promise-reject-errors'
    | 'prefer-regex-literals'
    | 'radix'
    | 'require-unicode-regexp'
    | 'vars-on-top'
    | 'wrap-iife'
    | 'yoda'
>;

export type StrictModeRules = PickESLintRules<'strict'>;

export type VariablesRules = PickESLintRules<
    | 'no-delete-var'
    | 'no-label-var'
    | 'no-undef'
    | 'no-undef-init'
    | 'no-undefined'
>;

export type StylisticIssuesRules = PickESLintRules<
    | 'array-bracket-newline'
    | 'array-bracket-spacing'
    | 'array-element-newline'
    | 'block-spacing'
    | 'camelcase'
    | 'capitalized-comments'
    | 'comma-style'
    | 'computed-property-spacing'
    | 'consistent-this'
    | 'eol-last'
    | 'func-name-matching'
    | 'func-names'
    | 'func-style'
    | 'function-call-argument-newline'
    | 'function-paren-newline'
    | 'id-denylist'
    | 'id-length'
    | 'id-match'
    | 'implicit-arrow-linebreak'
    | 'jsx-quotes'
    | 'key-spacing'
    | 'line-comment-position'
    | 'linebreak-style'
    | 'lines-around-comment'
    | 'max-depth'
    | 'max-len'
    | 'max-lines'
    | 'max-lines-per-function'
    | 'max-nested-callbacks'
    | 'max-params'
    | 'max-statements'
    | 'max-statements-per-line'
    | 'multiline-comment-style'
    | 'multiline-ternary'
    | 'new-cap'
    | 'new-parens'
    | 'newline-per-chained-call'
    | 'no-bitwise'
    | 'no-continue'
    | 'no-inline-comments'
    | 'no-lonely-if'
    | 'no-mixed-operators'
    | 'no-mixed-spaces-and-tabs'
    | 'no-multi-assign'
    | 'no-multiple-empty-lines'
    | 'no-negated-condition'
    | 'no-nested-ternary'
    | 'no-new-object'
    | 'no-plusplus'
    | 'no-tabs'
    | 'no-ternary'
    | 'no-trailing-spaces'
    | 'no-underscore-dangle'
    | 'no-unneeded-ternary'
    | 'no-whitespace-before-property'
    | 'nonblock-statement-body-position'
    | 'object-curly-newline'
    | 'object-property-newline'
    | 'one-var'
    | 'one-var-declaration-per-line'
    | 'operator-assignment'
    | 'operator-linebreak'
    | 'padded-blocks'
    | 'padding-line-between-statements'
    | 'prefer-exponentiation-operator'
    | 'prefer-object-spread'
    | 'quote-props'
    | 'semi-spacing'
    | 'semi-style'
    | 'sort-keys'
    | 'sort-vars'
    | 'space-before-blocks'
    | 'space-in-parens'
    | 'space-unary-ops'
    | 'spaced-comment'
    | 'switch-colon-spacing'
    | 'template-tag-spacing'
    | 'unicode-bom'
    | 'wrap-regex'
>;

export type ECMAScript6Rules = PickESLintRules<
    | 'arrow-body-style'
    | 'arrow-parens'
    | 'arrow-spacing'
    | 'constructor-super'
    | 'generator-star-spacing'
    | 'no-class-assign'
    | 'no-confusing-arrow'
    | 'no-const-assign'
    | 'no-duplicate-import'
    | 'no-new-symbol'
    | 'no-this-before-super'
    | 'no-useless-computed-key'
    | 'no-useless-rename'
    | 'no-var'
    | 'object-shorthand'
    | 'prefer-arrow-callback'
    | 'prefer-const'
    | 'prefer-destructuring'
    | 'prefer-numeric-literals'
    | 'prefer-rest-params'
    | 'prefer-spread'
    | 'prefer-template'
    | 'require-yield'
    | 'rest-spread-spacing'
    | 'sort-imports'
    | 'symbol-description'
    | 'template-curly-spacing'
    | 'yield-star-spacing'
>;

export type ExtendedFromTypescriptPluginRules = PickESLintRules<
    | 'brace-style'
    | 'comma-dangle'
    | 'comma-spacing'
    | 'default-param-last'
    | 'dot-notation'
    | 'func-call-spacing'
    | 'indent'
    | 'init-declarations'
    | 'keyword-spacing'
    | 'lines-between-class-members'
    | 'no-array-constructor'
    | 'no-dupe-class-members'
    | 'no-empty-function'
    | 'no-extra-parens'
    | 'no-extra-semi'
    | 'no-implied-eval'
    | 'no-invalid-this'
    | 'no-loop-func'
    | 'no-loss-of-precision'
    | 'no-magic-numbers'
    | 'no-redeclare'
    | 'no-shadow'
    | 'no-throw-literal'
    | 'no-unused-expressions'
    | 'no-unused-vars'
    | 'no-use-before-define'
    | 'no-useless-constructor'
    | 'object-curly-spacing'
    | 'quotes'
    | 'require-await'
    | 'return-await'
    | 'semi'
    | 'space-before-function-paren'
    | 'space-infix-ops'
    | 'class-methods-use-this'
    | 'max-params'
    | 'no-restricted-imports'
    | 'prefer-destructuring'
>;

export type RestrictedRules = PickESLintRules<
    | 'no-restricted-syntax'
    | 'no-restricted-properties'
    | 'no-restricted-globals'
    | 'no-restricted-imports'
    | 'no-restricted-exports'
    | 'no-shadow-restricted-names'
>;
