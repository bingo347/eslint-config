import type {TypescriptStylisticRules} from './types/stylistic';
import {L} from '../utils';

const rules: TypescriptStylisticRules = {
    '@typescript-eslint/block-spacing': L.Off,
    '@typescript-eslint/key-spacing': L.Off,
    '@typescript-eslint/lines-around-comment': L.Off,
    '@typescript-eslint/padding-line-between-statements': L.Off,
    '@typescript-eslint/space-before-blocks': L.Off,
};

export default rules;
