import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    rules: {
      'no-console': ['error', { allow: ['error', 'info'] }],
      'no-unused-vars': 'off',
      curly: 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-unused-expressions': 'off',
      '@next/next/no-img-element': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react/no-unescaped-entities': 'off',
      'no-extra-boolean-cast': 'error',
      'prefer-const': 'error',
      camelcase: 'error',
    },
  },

  {
    files: ['pages/api/**/*.ts', 'pages/api/**/*.tsx'],
    rules: {
      camelcase: 'off',
    },
  },
]);

export default eslintConfig;
