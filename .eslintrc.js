module.exports = {
    extends: [require.resolve('@umijs/fabric/dist/eslint')],
    globals: {
        ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
        page: true,
        REACT_APP_ENV: true,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 'warn',
        'no-tabs': 'error',
        indent: ['error', 4, { SwitchCase: 1 }],
        'comma-dangle': [
            'warn',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'never',
                exports: 'never',
                functions: 'ignore',
            },
        ],
        'no-var': 'warn',
    },
};
