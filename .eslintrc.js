module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    'exampleGlobalVariable': true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['assets', './src/assets/'],
          ['components', './src/components/'],
          ['containers', './src/containers/'],
          ['ducks', './src/ducks/'],
          ['tests', './src/tests/'],
          ['utils', './src/utils/'],
        ],
      },
    },
    react: {
      pragma: 'React',
      version: '16.8.3',
    },
  },
  plugins: [
    'react',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'wrap-iife': [
      'error', 'inside',
    ],
    'eqeqeq': [
      'off',
    ],
    'object-curly-spacing': [
      'error', 'never',
    ],
    'react/destructuring-assignment': [
      'off',
    ],
    'react/jsx-one-expression-per-line': [
      'off',
    ],
    /*
    'no-use-before-define': [
      'error', 'nofunc',
    ],
    'no-plusplus': [
      'off',
    ],
    'arrow-body-style': [
      'error', 'as-needed',
    ],
    'arrow-parens': [
      'error', 'always',
    ],
    */
  },
}
