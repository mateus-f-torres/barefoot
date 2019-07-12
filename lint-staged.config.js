module.exports = {
  '*.js': [
    'eslint --fix',
    'git add',
    'jest --bail --findRelatedTests --coverage',
  ],
}
