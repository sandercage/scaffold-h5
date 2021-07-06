const fabric = require('@umijs/fabric')

module.exports = {
    ...fabric.prettier,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    semi: false,
    tabWidth: 4,
    jsxSingleQuote: true,
    overrides: [
        {
            files: '.prettierrc',
            options: { parser: 'json', tabWidth: 4 },
        },
    ],
}
