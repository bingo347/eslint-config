# eslint-config

ESLint rules preset for my typescript projects

## Installation

```sh
npm i -D @bingo347/eslint-config eslint typescript
```

## Configuration

Configure [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) \
Add .eslintrc:

```json
{
    "parserOptions": {
        "project": "./tsconfig.json",
        "tsconfigRootDir": "."
    },
    "extends": [
        "@bingo347"
    ],
    "rules": {
        // your overrides here
    }
}
```

## License

MIT
