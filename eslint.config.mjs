import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: [
      'node_modules/**',
      'playwright-report/**',
      'test-results/**',
      'coverage/**'
    ],
  },

  js.configs.recommended,

  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    rules: {
      'no-console': 'off'
    }
  },

  ...tseslint.configs.recommended.map(config => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx']
  }))
);