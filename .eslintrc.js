module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'arrow-parens': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/prop-types': [1, { ignore: ['children'], customValidators: [] }],
    'no-return-assign': 1,
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'ignore'
      }
    ],
    'object-curly-newline': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/no-unresolved': 0
  },
  env: {
    browser: true,
    node: true
  },
  //全局变量提示
  globals: {
    document: false
  }
};
