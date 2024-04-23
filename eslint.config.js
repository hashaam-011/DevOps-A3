module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended' // Add any other extended configurations here
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'], // Add any other plugins here
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        filter: {
          regex: '^(__dirname|__filename)$',
          match: false
        }
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      }
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'no-tabs': 'off'
  }
};
