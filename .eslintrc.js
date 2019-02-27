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
          ['assets', './src/assets/'],
          ['components', './src/components/'],
          ['containers', './src/containers/'],
          ['ducks', './src/ducks/'],
          ['tests', './src/tests/'],
          ['types', './src/types/'],
          ['utils', './src/utils/'],
        ],
      },
    },
    react: {
      pragma: 'React',
      version: '16.8.3',
      flowVersion: '0.93.0',
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
    'react/destructuring-assignment': [
      'off',
    ],
    'react/jsx-one-expression-per-line': [
      'off',
    ],
    'import/prefer-default-export': [
      'off',
    ]
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
