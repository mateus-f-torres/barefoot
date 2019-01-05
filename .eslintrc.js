module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
        impliedStrict: true,
        jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
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
          ['Types', './src/types/'],
          ['Store', './src/stores/'],
          ['Components', './src/views/'],
          ['Assets', './src/assets/'],
        ],
      },
    },
    react: {
      pragma: 'React',
      version: '16.7.0',
      flowVersion: '0.89.0',
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  plugins: [
    'react',
    'flowtype',
  ],
  extends: [
    'airbnb', 
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
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
    'spaced-comment': [
      'error', 'always', { 'exceptions': ['@flow']}
    ],
    */
  },
}
