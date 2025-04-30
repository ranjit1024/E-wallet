module.exports = {
    parser: '@typescript-eslint/parser', // Use TypeScript parser
    parserOptions: {
      ecmaVersion: 2020, // Modern JavaScript
      sourceType: 'module',
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:next/recommended',
    ],
    plugins: ['@typescript-eslint'],
    rules: {
      // Prevent usage of 'any' type
      '@typescript-eslint/no-explicit-any': 'error',  // This will make 'any' an error
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  }
  