import type {Linter} from 'eslint';
import type {PrefixedRuleSet} from '../../utils';

export type TypescriptStylisticRules = PrefixedRuleSet<'@typescript-eslint', {
    'block-spacing': Linter.RuleEntry;
    'key-spacing': Linter.RuleEntry;
    'lines-around-comment': Linter.RuleEntry;
    'padding-line-between-statements': Linter.RuleEntry;
    'space-before-blocks': Linter.RuleEntry;
}>;
