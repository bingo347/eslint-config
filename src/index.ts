import ESLintCommentsRules from './eslint-comments/rules';
import ESLintBaseBestPracticesRules from './eslint-base/best-practices-rules';
import ESLintBaseECMAScript6Rules from './eslint-base/ecma-script6-rules';
import ESLintBasePossibleErrorsRules from './eslint-base/possible-errors-rules';
import ESLintBaseStrictModeRules from './eslint-base/strict-mode-rules';
import ESLintBaseStylisticIssuesRules from './eslint-base/stylistic-issues-rules';
import ESLintBaseVariablesRules from './eslint-base/variables-rules';
import ESLintBaseExtendedFromTypescriptPluginRules from './eslint-base/extended-from-typescript-plugin-rules';
import ESLintBaseRestrictedRules from './eslint-base/restricted-rules';
import typescriptBaseRules from './typescript/base-rules';
import TypescriptExtRules from './typescript/extended-rules';

export default {
    parser:  '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'eslint-comments',
    ],
    rules: {
        ...ESLintCommentsRules,
        ...ESLintBaseBestPracticesRules,
        ...ESLintBaseECMAScript6Rules,
        ...ESLintBasePossibleErrorsRules,
        ...ESLintBaseStrictModeRules,
        ...ESLintBaseStylisticIssuesRules,
        ...ESLintBaseVariablesRules,
        ...ESLintBaseExtendedFromTypescriptPluginRules,
        ...ESLintBaseRestrictedRules,
        ...typescriptBaseRules,
        ...TypescriptExtRules,
    },
};
