module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    'jest/globals': true,
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'unused-imports',
    'react-hooks',
    'prettier',
  ],
  extends: ['@react-native-community', 'plugin:react-hooks/recommended'],
  rules: {
    'prettier/prettier': 'warn',
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'no-unused-vars': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          'external',
          'builtin',
          'unknown',
          'index',
          'parent',
          'sibling',
        ],
        'newlines-between': 'always-and-inside-groups',
        pathGroups: [
          {
            pattern: 'react+(|-native)',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
};
