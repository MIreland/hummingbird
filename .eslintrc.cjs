module.exports = {
  extends: [
    'react-app',
    'plugin:react/recommended',
  ],
  plugins: [
    'sort-keys-fix',
  ],
  reportUnusedDisableDirectives: true,
  root: true,
  rules: {
    'indent': ['error', 2],
    'keyword-spacing': 'error',
    'object-curly-spacing': ['error', "always"],
    'prefer-template': 'error',
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-indent': ['warn', 2, {
      checkAttributes: true,
      indentLogicalExpressions: true
    }],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-one-expression-per-line': ['warn', { allow: 'literal' }],
    'react/jsx-sort-default-props': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/jsx-wrap-multilines': ['warn', {
      "arrow": "parens-new-line",
      "assignment": "parens-new-line",
      "condition": "parens-new-line",
      "declaration": "parens-new-line",
      "logical": "parens-new-line",
      "prop": "parens-new-line",
      "return": "parens-new-line"
    }],
    'sort-keys-fix/sort-keys-fix': 'warn',
    'space-before-blocks': 'error',
    'space-infix-ops': 'error',
  }
};
