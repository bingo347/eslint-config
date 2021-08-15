import type {PrefixedRuleSet, RuleWithConfig} from '../utils';

type Transforms =
    | 'charSurrogatePairToSingleUnicode'
    | 'charCodeToSimpleChar'
    | 'charCaseInsensitiveLowerCaseTransform'
    | 'charClassRemoveDuplicates'
    | 'quantifiersMerge'
    | 'quantifierRangeToSymbol'
    | 'charClassClassrangesToChars'
    | 'charClassClassrangesMerge'
    | 'charClassToMeta'
    | 'charClassToSingleChar'
    | 'charEscapeUnescape'
    | 'disjunctionRemoveDuplicates*'
    | 'groupSingleCharsToCharClass*'
    | 'removeEmptyGroup'
    | 'ungroup'
    | 'combineRepeatingPatterns';

export type OptimizeRegexRules = PrefixedRuleSet<'optimize-regex', {
    'optimize-regex': RuleWithConfig<{
        whitelist: Transforms[];
        blacklist: Transforms[];
    }>;
}>;
