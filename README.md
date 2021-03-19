# eslint-config

ESLint rules preset for my typescript projects

## Installation

```sh
npm i -D @bingo347/eslint-config eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-eslint-comments
```

## Configuration

Configure [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
Add .eslintrc.js:

```js
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
        '@bingo347'
    ],
    rules: {
        // your overrides here
    }
};

```

## License

MIT
