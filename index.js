module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      plugins: ['@babel/plugin-syntax-top-level-await'],
      presets: ['@babel/preset-react']
    }
  },
  // TODO: Use when top-level-await is supported in eslint default parser.
  // parserOptions: {
  //   ecmaFeatures: { jsx: true },
  //   ecmaVersion: 2021,
  //   sourceType: 'module'
  // },
  plugins: ['import', 'prettier', 'react', 'react-hooks'],
  rules: {
    'import/newline-after-import': 'error',
    'import/no-named-export': 'error',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      { alphabetize: { order: 'asc' }, 'newlines-between': 'always' }
    ],
    'no-async-promise-executor': 'off',
    'no-constant-condition': ['error', { checkLoops: false }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        jsxSingleQuote: true,
        singleQuote: true,
        trailingComma: 'none'
      },
      { fileInfoOptions: { withNodeModules: true } }
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'require-atomic-updates': 'off',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    curly: ['error', 'multi-line'],
    eqeqeq: ['error', 'always', { null: 'ignore' }]
  },
  settings: {
    'import/internal-regex': '^src/',
    react: { version: 'latest' }
  }
};
