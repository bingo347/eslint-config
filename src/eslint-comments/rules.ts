import type {ESLintCommentsRules} from './types';
import {L} from '../utils';

const rules: ESLintCommentsRules = {
    'eslint-comments/disable-enable-pair': [L.Error, {
        allowWholeFile: true,
    }],
    'eslint-comments/no-aggregating-enable': L.Error,
    'eslint-comments/no-duplicate-disable': L.Error,
    'eslint-comments/no-unlimited-disable': L.Error,
    'eslint-comments/no-unused-disable': L.Error,
    'eslint-comments/no-unused-enable': L.Error,
    'eslint-comments/no-restricted-disable': [L.Warn,
        'no-debugger',
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
        '@typescript-eslint/no-loop-func',
        '@typescript-eslint/no-magic-numbers'],
    'eslint-comments/no-use': L.Off,
    'eslint-comments/require-description': L.Off,
};

export default rules;
