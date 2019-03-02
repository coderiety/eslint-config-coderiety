module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 9,
    ecmaFeatures: { jsx: true }
  },
  env: { browser: true, es6: true, jest: true, node: true },
  rules: {
    "consistent-return": "off",
    "default-case": "off",
    "global-require": "off",
    "guard-for-in": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "jsx-a11y/accessible-emoji": "off",
    "jsx-a11y/alt-text": "off",
    "no-await-in-loop": "off",
    "no-bitwise": "off",
    "no-empty": "off",
    "no-multi-assign": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-return-assign": "off",
    "no-shadow": "off",
    "no-use-before-define": "off",
    "prefer-const": ["error", { destructuring: "all" }],
    "prefer-destructuring": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/no-array-index-key": "off",
    "react/prop-types": "off",
    "require-await": "error",
    curly: ["error", "multi-line"],
    radix: "off"
  }
};
