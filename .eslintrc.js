module.exports = {
  root: true, // 上位ディレクトリを検索しない
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    // ecmaVersion: latest,
    // ecmaVersion: 2022, // same as 13
    sourceType: 'module', // use import/export
    ecmaFeatures: {
     jsx: true
    },
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],
  extends: [
//    'standard',
//    'standard-with-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
}
