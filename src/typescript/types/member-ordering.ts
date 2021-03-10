import type {Linter} from 'eslint';
import type {PrefixedRuleSet} from '../../utils';

type MemberOrderingTypes =
    | 'signature'
    | 'public-static-field'
    | 'protected-static-field'
    | 'private-static-field'
    | 'public-decorated-field'
    | 'protected-decorated-field'
    | 'private-decorated-field'
    | 'public-instance-field'
    | 'protected-instance-field'
    | 'private-instance-field'
    | 'public-abstract-field'
    | 'protected-abstract-field'
    | 'private-abstract-field'
    | 'public-constructor'
    | 'protected-constructor'
    | 'private-constructor'
    | 'public-static-method'
    | 'protected-static-method'
    | 'private-static-method'
    | 'public-decorated-method'
    | 'protected-decorated-method'
    | 'private-decorated-method'
    | 'public-instance-method'
    | 'protected-instance-method'
    | 'private-instance-method'
    | 'public-abstract-method'
    | 'protected-abstract-method'
    | 'private-abstract-method';
type MemberOrderingTypeOption<T> = {
    memberTypes: T[] | 'never';
    order?: 'alphabetically' | 'as-written';
} | {
    order: 'alphabetically';
};

export type MemberOrderingRule = PrefixedRuleSet<'@typescript-eslint', {
    'member-ordering': Linter.RuleEntry<[{
        default?: MemberOrderingTypeOption<MemberOrderingTypes>;
        classes?: MemberOrderingTypeOption<MemberOrderingTypes>;
        classExpressions?: MemberOrderingTypeOption<MemberOrderingTypes>;
        interfaces?: MemberOrderingTypeOption<'signature' | 'field' | 'method' | 'constructor'>;
        typeLiterals?: MemberOrderingTypeOption<'signature' | 'field' | 'method' | 'constructor'>;
    }]>;
}>;
