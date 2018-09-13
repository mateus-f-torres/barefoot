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
    "^Component/(.*)$": "<rootDir>/src/components/$1",
    "^Types/(.*)$": "<rootDir>/__types__/$1",
  },
};
