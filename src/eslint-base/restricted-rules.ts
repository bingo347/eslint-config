import type {RestrictedRules} from './types';
import {L} from '../utils';

const rules: RestrictedRules = {
    'no-restricted-syntax':       [L.Error],
    'no-restricted-properties':   [L.Error],
    'no-restricted-globals':      [L.Error],
    'no-restricted-imports':      [L.Error],
    'no-restricted-exports':      [L.Error],
    'no-shadow-restricted-names': [L.Error],
};

export default rules;
