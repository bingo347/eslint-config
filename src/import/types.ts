import type {Linter} from 'eslint';
import type {PrefixedRuleSet, RuleWithConfig} from '../utils';

type Group =
    | 'builtin'
    | 'external'
    | 'internal'
    | 'unknown'
    | 'parent'
    | 'sibling'
    | 'index'
    | 'object'
    | 'type';

export type ImportRules = PrefixedRuleSet<'import', {
    first:                        Linter.RuleEntry;
    'no-mutable-exports':         Linter.RuleEntry;
    'no-absolute-path':           Linter.RuleEntry;
    'newline-after-import':       Linter.RuleEntry;
    'no-relative-parent-imports': Linter.RuleEntry;
    'no-useless-path-segments':   Linter.RuleEntry;
    order: RuleWithConfig<{
        groups:     Group[];
        pathGroups: {
            pattern:         string;
            group:           Group;
            position?:       'after' | 'before';
            patternOptions?: {
                nocomment?:  boolean;
                debug?:      boolean;
                nonegate?:   boolean;
                nobrace?:    boolean;
                nocase?:     boolean;
                dot?:        boolean;
                noext?:      boolean;
                noglobstar?: boolean;
                nonull?:     boolean;
                matchBase?:  boolean;
                flipNegate?: boolean;
            };
        }[];
        alphabetize: {
            order:            'asc' | 'desc' | 'ignore';
            caseInsensitive?: boolean;
        };
        warnOnUnassignedImports: boolean;
        'newlines-between':      'ignore' | 'always' | 'always-and-inside-groups' | 'never';
    }>;
}>;

