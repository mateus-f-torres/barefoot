module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true,
        "jquery": true
    },
    "extends": "google",
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
        "react"
    ],
    "rules": {
        "no-console": [
          "warn"
        ],
        "no-debugger": [
          "warn"
        ],
        "indent": [
          "warn",
          2
        ],
        "quotes": [
          "off"
        ],
        "no-var": [
          "warn"
        ],
        "semi": [
          "warn",
          "always"
        ],
        "react/jsx-uses-react": [
          "warn"
        ],
        "react/jsx-uses-vars": [
          "warn"
        ],
        "object-curly-spacing": [
          "off"
        ],
        "comma-dangle": [
          "error", "never"
        ],
        "spaced-comment": [
          "error", "always", { "exceptions": ["@flow"]}
        ]
    }
}