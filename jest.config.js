module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>__tests__/setup/setupEnzyme.js',
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.c9/',
    'setupEnzyme.js'
  ],
  moduleNameMapper: {
    "^Store/(.*)$": "<rootDir>/src/store/$1",
    "^Components/(.*)$": "<rootDir>/src/components/$1",
    "^Types/(.*)$": "<rootDir>/types/$1",
    "^Mocks/(.*)$": "<rootDir>/__mocks__/$1",
  },
};
