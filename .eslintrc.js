module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
        "impliedStrict": true,
        "jsx": true,
    },
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "jest": true,
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "16.4.1",
      "flowVersion": "0.80.0",
    },
  },
  "plugins": [
    // TODO check if necessary: babel plugin
    "babel",
    "react",
    "flowtype",
  ],
  "extends": [
    "eslint:recommended",
    // TODO change to airbnb style
    "google", 
    "plugin:react/recommended",
    "plugin:flowtype/recommended"
  ],
  "rules": {
    // TODO turn all off to check needed
    "no-console": [
      "warn"
    ],
    "no-debugger": [
      "warn"
    ],
    "indent": [
      "error",
      2
    ],
    "react/jsx-uses-react": [
      "warn"
    ],
    "react/jsx-uses-vars": [
      "warn"
    ],
    "spaced-comment": [
      "error", "always", { "exceptions": ["@flow"]}
    ],
    "require-jsdoc": [
      "off"
    ],
    "babel/no-invalid-this": [
      "error"
    ],
    "no-invalid-this": [
      "off"
    ],
  }
}
