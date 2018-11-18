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
    "import/resolver": {
      alias: {
        map: [
          ["Types", "./src/types/"],
          ["Store", "./src/stores/"],
          ["Components", "./src/views/"],
          ["Assets", "./src/assets/"],
        ],
      },
    },
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
    "airbnb", 
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
  ],
  "rules": {
    // TODO turn all off to check needed
    "no-console": [
      "warn"
    ],
    "no-debugger": [
      "warn"
    ],
    "spaced-comment": [
      "error", "always", { "exceptions": ["@flow"]}
    ],
    /*
    "react/jsx-uses-react": [
      "warn"
    ],
    "react/jsx-uses-vars": [
      "warn"
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
  */
  },
}
