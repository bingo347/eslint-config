const path = require('path');

module.exports = {
    parserOptions: {
        project: [
            path.resolve(__dirname, './tsconfig.json')
        ],
        tsconfigRootDir: __dirname
    },
    extends: [
        require.resolve('./index.js')
    ],
    rules: {}
};
