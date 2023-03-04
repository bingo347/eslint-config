/// <reference types="node" />
import * as path from 'path';
import {terser} from 'rollup-plugin-terser';
import tsPlugin from 'rollup-plugin-ts';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
    input:  path.join(__dirname, 'src/index.ts'),
    output: {
        file:    path.join(__dirname, 'index.js'),
        format:  'cjs',
        exports: 'default',
        plugins: [
            terser(),
        ],
    },
    plugins: [
        tsPlugin(),
    ],
};
