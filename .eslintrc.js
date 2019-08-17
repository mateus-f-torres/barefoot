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
    worker: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react'],
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  rules: {
    'eqeqeq': ['off'],
    'no-await-in-loop': ['error'],
    'guard-for-in': ['error'],
    'no-implicit-globals': ['error'],
    'no-return-await': ['error'],
    'no-shadow': ['error', {builtinGlobals: false, hoist: 'functions'}],
    'complexity': ['warn', {max: 6}],
    'max-depth': ['warn', {max: 4}],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'max-lines': [
      'warn',
      {max: 300, skipBlankLines: false, skipComments: false},
    ],
    'max-lines-per-function': [
      'warn',
      {max: 50, skipBlankLines: false, skipComments: false, IIFEs: false},
    ],
    'max-nested-callbacks': ['warn', {max: 5}],
    'max-params': ['warn', {max: 3}],
    'react/prop-types': ['warn'],
  },
}
