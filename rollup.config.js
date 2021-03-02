import * as path from 'path';
import tsPlugin from '@wessberg/rollup-plugin-ts';

export default {
    input: path.join(__dirname, 'src/index.ts'),
    output: {
        file: path.join(__dirname, 'index.js'),
        format: 'cjs',
        exports: 'default'
    },
    plugins: [
        tsPlugin()
    ]
};
