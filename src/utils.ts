import type {Linter} from 'eslint';

export const enum L {
    Off   = 0,
    Warn  = 1,
    Error = 2,
}

export type PrefixedRuleSet<P extends string, R extends Linter.RulesRecord> = {
    [K in keyof R as `${P}/${string & K}`]: R[K];
};

export type RuleWithConfig<R extends Record<string, unknown>> = Linter.RuleEntry<[Partial<R>]>;
