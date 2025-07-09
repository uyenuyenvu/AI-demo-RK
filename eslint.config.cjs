// ESLint Flat Config chỉ cho file .js (bỏ qua .vue để tránh lỗi)
const prettier = require('eslint-plugin-prettier');

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      semi: ['error', 'always'],
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          tabWidth: 2,
        },
      ],
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
