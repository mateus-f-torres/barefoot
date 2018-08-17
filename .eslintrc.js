module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "jquery": true,
    "jest": true
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "16.4.1",
      "flowVersion": "0.75",
    },
  },
  "extends": [
    "eslint:recommended",
    "google", 
    "plugin:react/recommended",
    "plugin:flowtype/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
        "impliedStrict": true,
        "experimentalObjectRestSpread": true,
        "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "flowtype"
  ],
  "rules": {
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
    ]
  }
}
