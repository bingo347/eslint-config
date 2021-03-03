import type { ESLintCommentsRules } from './types';

const rules: ESLintCommentsRules = {
    'eslint-comments/disable-enable-pair': ['error', {
        allowWholeFile: true,
    }],
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'eslint-comments/no-restricted-disable': ['warn',
        'no-debugger',
        'no-dupe-args',
        'no-dupe-keys',
        'no-func-assign',
        'no-import-assign',
        'no-unexpected-multiline',
        'no-unreachable-loop',
        'no-unsafe-negation',
        'no-unsafe-optional-chaining',
        'use-isnan',
        'no-delete-var',
        'constructor-super',
        'no-const-assign',
        'no-new-symbol',
        'no-this-before-super',
        'no-var',
    ],
    'eslint-comments/no-use': 'off',
    'eslint-comments/require-description': 'off',
};

export default rules;
