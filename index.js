module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 9,
    ecmaFeatures: { jsx: true }
  },
  rules: {
    'consistent-return': 'off',
    'default-case': 'off',
    'global-require': 'off',
    'guard-for-in': 'off',
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/order': ['error', { groups: [], 'newlines-between': 'never' }],
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/label-has-for': 'off',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-empty': 'off',
    'no-multi-assign': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-destructuring': 'off',
    'prettier/prettier': [
      'error',
      { jsxSingleQuote: true, singleQuote: true },
      { fileInfoOptions: { withNodeModules: true } }
    ],
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'require-await': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    curly: ['error', 'multi-line'],
    radix: 'off'
  }
};
