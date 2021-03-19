import type {VariablesRules} from './types';
import {L} from '../utils';

const rules: VariablesRules = {
    'no-delete-var': L.Error,
    'no-undef-init': L.Error,
    'no-undefined':  L.Error,
    'no-undef':      L.Off, // typescript check it better
    'no-label-var':  L.Off,
};

export default rules;
