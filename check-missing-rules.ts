/// <reference types="node" />
/* eslint-disable no-console */

import {rules as typescriptPluginRules} from '@typescript-eslint/eslint-plugin';
// @ts-expect-error: missing types
import {rules as eslintCommentsRules} from 'eslint-plugin-eslint-comments';
// @ts-expect-error: missing types
import {rules as importRules} from 'eslint-plugin-import';
// @ts-expect-error: missing types
import {rules as optimizeRegexRules} from 'eslint-plugin-optimize-regex';
import thisConfig from './src/index';

const thisRules = rulesSet(thisConfig.rules);

const plugins = {
    '@typescript-eslint': rulesSet(typescriptPluginRules),
    'eslint-comments': rulesSet(eslintCommentsRules as Record<string, unknown>),
    import: rulesSet(importRules as Record<string, unknown>),
    'optimize-regex': rulesSet(optimizeRegexRules as Record<string, unknown>),
};

const missingRules: string[] = [];

for (const [plugin, rules] of Object.entries(plugins)) {
    for (const rule of rules) {
        const fullRule = `${plugin}/${rule}`;
        if (!thisRules.has(fullRule)) {
            missingRules.push(fullRule);
        }
    }
}

for (const rule of missingRules) {
    console.log(rule);
}

if (missingRules.length !== 0) {
    process.exit(1);
}

function rulesSet(rules: Record<string, unknown>) {
    return new Set(Object.keys(rules));
}
