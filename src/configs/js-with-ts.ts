export = {
    plugins: ['mig2ts'],
    rules: {
        'no-dynamic-import': ['warn', { esmodule: true }],
        'no-commonjs-exports': 'warn',
        'no-require': 'warn'
    },
};
