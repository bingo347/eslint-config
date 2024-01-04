import eslintBaseBestPracticesRules from './eslint-base/best-practices-rules';
import eslintBaseECMAScript6Rules from './eslint-base/ecma-script6-rules';
import eslintBaseExtendedFromTypescriptPluginRules from './eslint-base/extended-from-typescript-plugin-rules';
import eslintBasePossibleErrorsRules from './eslint-base/possible-errors-rules';
import eslintBaseRestrictedRules from './eslint-base/restricted-rules';
import eslintBaseStrictModeRules from './eslint-base/strict-mode-rules';
import eslintBaseStylisticIssuesRules from './eslint-base/stylistic-issues-rules';
import eslintBaseVariablesRules from './eslint-base/variables-rules';
import eslintCommentsRules from './eslint-comments/rules';
import importRules from './import/rules';
import optimizeRegexRules from './optimize-regex/rules';
import typescriptBaseRules from './typescript/base-rules';
import typescriptExtRules from './typescript/extended-rules';
import typescriptStylisticRules from './typescript/stylistic-rules';

export default {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'eslint-comments',
        'import',
        'optimize-regex',
    ],
    settings: {
        'import/core-modules': ['electron', 'vscode'],
    },
    extends: [
        'plugin:import/typescript',
    ],
    rules: {
        ...eslintBaseBestPracticesRules,
        ...eslintBaseECMAScript6Rules,
        ...eslintBaseExtendedFromTypescriptPluginRules,
        ...eslintBasePossibleErrorsRules,
        ...eslintBaseRestrictedRules,
        ...eslintBaseStrictModeRules,
        ...eslintBaseStylisticIssuesRules,
        ...eslintBaseVariablesRules,
        ...eslintCommentsRules,
        ...importRules,
        ...optimizeRegexRules,
        ...typescriptBaseRules,
        ...typescriptExtRules,
        ...typescriptStylisticRules,
    },
};
