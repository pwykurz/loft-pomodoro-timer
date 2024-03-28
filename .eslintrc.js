module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  ignorePatterns: ['*/ui/icons/*'],
  rules: {
    semi: ['error', 'never'],
    'import/no-extraneous-dependencies': 0,
    'max-len': ['error', { code: 160 }],
    'no-underscore-dangle': 0,
    'prefer-destructuring': [1, { object: true, array: true }],
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums", // avoid using enums - https://stackoverflow.com/questions/40275832/typescript-has-unions-so-are-enums-redundant
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-await-in-loop': 0,
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ], // to allow to use tsx files
    'react/jsx-sort-props': 2,
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'testing-library/prefer-screen-queries': 'off',
    'react-hooks/exhaustive-deps': 0,
  },
}
