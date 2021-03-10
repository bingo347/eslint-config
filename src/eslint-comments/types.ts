import type {Linter} from 'eslint';
import type {PrefixedRuleSet, RuleWithConfig} from '../utils';

type CommentTypes =
    | 'eslint'
    | 'eslint-disable'
    | 'eslint-disable-line'
    | 'eslint-disable-next-line'
    | 'eslint-enable'
    | 'eslint-env'
    | 'exported'
    | 'global'
    | 'globals';

export type ESLintCommentsRules = PrefixedRuleSet<'eslint-comments', {
    'disable-enable-pair': RuleWithConfig<{
        allowWholeFile: boolean;
    }>;
    'no-aggregating-enable': Linter.RuleEntry;
    'no-duplicate-disable': Linter.RuleEntry;
    'no-unlimited-disable': Linter.RuleEntry;
    'no-unused-disable': Linter.RuleEntry;
    'no-unused-enable': Linter.RuleEntry;
    'no-restricted-disable': Linter.RuleEntry<string[]>;
    'no-use': RuleWithConfig<{
        allow: CommentTypes[]
    }>;
    'require-description': RuleWithConfig<{
        ignore: CommentTypes[]
    }>;
}>;
