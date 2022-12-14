// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:wc/recommended',
    'plugin:lit/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'wc', 'lit'],
  rules: {
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'HTMLElementTagNameMap',
      },
    ],
  },
};
