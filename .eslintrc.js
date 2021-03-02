const path = require('path');

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: [
            path.resolve(__dirname, './tsconfig.json')
        ],
        tsconfigRootDir: __dirname
    },
    plugins: [
        '@typescript-eslint',
        'eslint-comments'
    ],
    extends: [
        require.resolve('./index.js')
    ],
    rules: {}
};
