import type { Linter } from 'eslint';

export type PrefixedRuleSet<P extends string, R extends Linter.RulesRecord> = {
    [K in keyof R as `${P}/${string & K}`]: R[K];
};

export type RuleWithConfig<R extends Record<string, unknown>> = Linter.RuleEntry<[Partial<R>]>;
