const eslintConfigPrettier = require('eslint-config-prettier');
const typescriptEsLintParser = require('@typescript-eslint/parser');

const eslintPluginImport = require('eslint-plugin-import');
const angularEslintPlugin = require('@angular-eslint/eslint-plugin');
const typescriptEslintEslintPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptEsLintParser,
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module'
      }
    },
    plugins: {
      import: eslintPluginImport,
      '@angular-eslint': angularEslintPlugin,
      '@typescript-eslint': typescriptEslintEslintPlugin
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'anms', style: 'camelCase' }
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'anms', style: 'kebab-case' }
      ],
      '@angular-eslint/component-class-suffix': 'error',
      '@angular-eslint/directive-class-suffix': 'error',
      '@angular-eslint/no-input-rename': 'error',
      '@angular-eslint/no-output-on-prefix': 'error',
      '@angular-eslint/no-output-rename': 'error',
      '@angular-eslint/use-pipe-transform-interface': 'error',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/dot-notation': 'off',
      '@typescript-eslint/explicit-member-accessibility': [
        'off',
        {
          accessibility: 'explicit'
        }
      ],
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/naming-convention': 'error',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-inferrable-types': [
        'error',
        {
          ignoreParameters: true
        }
      ],
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/quotes': ['error', 'single'],
      '@typescript-eslint/unified-signatures': 'error',
      'arrow-body-style': 'error',
      'constructor-super': 'error',
      eqeqeq: ['error', 'smart'],
      'guard-for-in': 'error',
      'id-blacklist': 'off',
      'id-match': 'off',
      'import/no-deprecated': 'warn',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-console': [
        'error',
        {
          allow: [
            'log',
            'dirxml',
            'warn',
            'error',
            'dir',
            'timeLog',
            'assert',
            'clear',
            'count',
            'countReset',
            'group',
            'groupCollapsed',
            'groupEnd',
            'table',
            'Console',
            'markTimeline',
            'profile',
            'profileEnd',
            'timeline',
            'timelineEnd',
            'timeStamp',
            'context'
          ]
        }
      ],
      'no-debugger': 'error',
      'no-empty': 'off',
      'no-eval': 'error',
      'no-fallthrough': 'error',
      'no-new-wrappers': 'error',
      'no-restricted-imports': [
        'error',
        {
          paths: ['rxjs/Rx'],
          patterns: ['rxjs/(?!operators|testing)']
        }
      ],
      'no-shadow': [
        'error',
        {
          hoist: 'all'
        }
      ],
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-underscore-dangle': 'off',
      'no-unused-labels': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      radix: 'error',
      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/']
        }
      ],
      indent: 'off'
    }
  },
  eslintConfigPrettier
];
