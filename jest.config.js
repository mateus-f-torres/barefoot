module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/tests/rtl.setup.js'],
  testPathIgnorePatterns: ['rtl.setup.js', 'helpers.js'],
  moduleNameMapper: {
    //    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/assetsTransformer.js',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^containers/(.*)$': '<rootDir>/src/containers/$1',
    '^ducks/(.*)$': '<rootDir>/ducks/$1',
    '^tests/(.*)$': '<rootDir>/tests/$1',
    '^types/(.*)$': '<rootDir>/types/$1',
    '^utils/(.*)$': '<rootDir>/utils/$1',
  },
};
