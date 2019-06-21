module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/rtl.setup.js'],
  testPathIgnorePatterns: ['rtl.setup.js', 'i18n.js','helpers.js'],
  moduleNameMapper: {
    '\\.(css|sass|scss|less)$': '<rootDir>/__mocks__/styleStub.js',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/assetsTransformer.js',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^containers/(.*)$': '<rootDir>/src/containers/$1',
    '^ducks/(.*)$': '<rootDir>/src/ducks/$1',
    '^tests/(.*)$': '<rootDir>/src/tests/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
  },
};
