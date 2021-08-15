import ESLintBaseBestPracticesRules from './eslint-base/best-practices-rules';
import ESLintBaseECMAScript6Rules from './eslint-base/ecma-script6-rules';
import ESLintBaseExtendedFromTypescriptPluginRules from './eslint-base/extended-from-typescript-plugin-rules';
import ESLintBasePossibleErrorsRules from './eslint-base/possible-errors-rules';
import ESLintBaseRestrictedRules from './eslint-base/restricted-rules';
import ESLintBaseStrictModeRules from './eslint-base/strict-mode-rules';
import ESLintBaseStylisticIssuesRules from './eslint-base/stylistic-issues-rules';
import ESLintBaseVariablesRules from './eslint-base/variables-rules';
import ESLintCommentsRules from './eslint-comments/rules';
import ImportRules from './import/rules';
import OptimizeRegexRules from './optimize-regex/rules';
import typescriptBaseRules from './typescript/base-rules';
import TypescriptExtRules from './typescript/extended-rules';

export default {
    parser:  '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'eslint-comments',
        'import',
    ],
    settings: {
        'import/core-modules': ['electron', 'vscode'],
    },
    extends: [
        'plugin:import/typescript',
    ],
    rules: {
        ...ESLintBaseBestPracticesRules,
        ...ESLintBaseECMAScript6Rules,
        ...ESLintBaseExtendedFromTypescriptPluginRules,
        ...ESLintBasePossibleErrorsRules,
        ...ESLintBaseRestrictedRules,
        ...ESLintBaseStrictModeRules,
        ...ESLintBaseStylisticIssuesRules,
        ...ESLintBaseVariablesRules,
        ...ESLintCommentsRules,
        ...ImportRules,
        ...OptimizeRegexRules,
        ...typescriptBaseRules,
        ...TypescriptExtRules,
    },
};
