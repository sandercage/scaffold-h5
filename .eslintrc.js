module.exports = {
    extends: [require.resolve('@umijs/fabric/dist/eslint')],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        // 打印
        'no-console': 'off',
        // 必须要new
        'no-new': 'off',
        // 有时候需要声明局部变量
        'no-underscore-dangle': 'off',
        // 可以避免声明多余的变量
        'no-param-reassign': 'off',
        // 返回值有可能是联合类型
        'consistent-return': 'off',
        // 简化书写, 保证用 () 包裹即可
        'no-return-assign': 'off',
        // 这个要有
        'no-plusplus': 'off',
        // 很多时候会在文本中放emoji
        'jsx-a11y/accessible-emoji': 'off',
        /* react */
        // 有时候需要使用dangerouslySetInnerHTML
        'react/no-danger': 'off',
        // 在没有id时只能使用index
        'react/no-array-index-key': 'off',
        // 其他
        'eslint-comments/no-unlimited-disable': 'off',
    },
    overrides: [
        {
            files: ['**/*.d.ts'],
            rules: {
                '@typescript-eslint/no-unused-vars': 'off',
                'no-redeclare': 'off',
            },
        },
    ],
}
