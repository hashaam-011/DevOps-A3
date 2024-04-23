module.exports = {
  files: ['*.ts', '*.tsx'],
  languageOptions: {
    parserOptions: {
      parser: '@typescript-eslint/parser'
    }
  },
  plugins: {
    '@typescript-eslint': require('@typescript-eslint/eslint-plugin'), // Load the plugin as an object
    'react': require('eslint-plugin-react') // Load the React plugin as an object
  },
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
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ]
};
