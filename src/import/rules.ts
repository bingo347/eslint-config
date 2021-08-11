import type {ImportRules} from './types';
import {L} from '../utils';

const rules: ImportRules = {
    'import/first':                      L.Error,
    'import/no-mutable-exports':         L.Error,
    'import/no-absolute-path':           L.Error,
    'import/newline-after-import':       L.Warn,
    'import/no-relative-parent-imports': L.Warn,
    'import/no-useless-path-segments':   L.Warn,
    'import/order':                      [L.Warn, {
        groups: [
            'builtin',
            'external',
            'internal',
            'sibling',
        ],
        pathGroups: [{
            pattern: '@/**',
            group:   'internal',
        }, {
            pattern: '@*/**',
            group:   'internal',
        }, {
            pattern: '~/**',
            group:   'internal',
        }, {
            pattern: '~*/**',
            group:   'internal',
        }],
        alphabetize: {
            order: 'asc',
        },
        'newlines-between': 'never',
    }],
};

export default rules;
