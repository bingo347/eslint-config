import type { Linter } from 'eslint';

export type PrefixedRuleSet<P extends string, R extends Linter.RulesRecord> = {
    [K in keyof R as `${P}/${string & K}`]: R[K];
};

export const makePrefix = <P extends string>(prefix: P) => <R extends string>(rule: R) => `${prefix}/${rule}` as const;
