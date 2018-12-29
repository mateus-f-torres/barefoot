module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>__tests__/setup/setupEnzyme.js',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  testPathIgnorePatterns: [
    // '<rootDir>/path/to/{folder|file}',
    'setupEnzyme.js',
    'helpers.js',
  ],
  moduleNameMapper: {
    // must come first to prevent jest issue #2663
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/assetsTransformer.js',
    '^Assets/(.*)$': '<rootDir>/src/assets/$1',
    '^Store/(.*)$': '<rootDir>/src/stores/$1',
    '^Components/(.*)$': '<rootDir>/src/views/$1',
    '^Types/(.*)$': '<rootDir>/types/$1',
    '^Mocks/(.*)$': '<rootDir>/__mocks__/$1',
    '^Helpers$': '<rootDir>/__tests__/setup/helpers.js',
  },
};
