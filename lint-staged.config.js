module.exports = {
  '*.js': [
    'prettier --write',
    'eslint --fix',
    'jest --bail --findRelatedTests',
  ],
}
