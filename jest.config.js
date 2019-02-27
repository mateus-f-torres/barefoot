module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/tests/rtl.setup.js'],
  testPathIgnorePatterns: ['rtl.setup.js', 'helpers.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/assetsTransformer.js',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^containers/(.*)$': '<rootDir>/src/containers/$1',
    '^ducks/(.*)$': '<rootDir>/src/ducks/$1',
    '^tests/(.*)$': '<rootDir>/src/tests/$1',
    '^types/(.*)$': '<rootDir>/src/types/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
  },
};
