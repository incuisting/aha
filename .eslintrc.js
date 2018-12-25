module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
    env: {
        browser: true,
        node: true,
    },
    //全局变量提示
    globals: {
        document: false,
    },
};
