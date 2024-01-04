import type {RestrictedRules} from './types';
import {L} from '../utils';

const rules: RestrictedRules = {
    'no-restricted-syntax': [L.Error, {
        selector: 'TryStatement',
        message: 'try { … } catch { … } statement may lead to unpredictable behavior and bugs',
    }],
    'no-restricted-properties': [L.Error],
    'no-restricted-globals': [L.Error],
    'no-restricted-imports': [L.Error],
    'no-restricted-exports': [L.Error],
    'no-shadow-restricted-names': [L.Error],
};

export default rules;
