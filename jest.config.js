module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>__tests__/setup/setupEnzyme.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/.c9/', 'setupEnzyme.js'],
  moduleNameMapper: {
    // e.g.
    // "^Styles/(.*)$": "<rootDir>/src/assets/stylesheets/$1",
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|sass|scss|less)$': 'identity-obj-proxy',
  },
};
