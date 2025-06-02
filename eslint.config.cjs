import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals'; // Adicione esta importação

export default [
  // Configurações globais
  {
    files: ['**/*.ts', '**/*.tsx'], // Aplica a configuração para arquivos TypeScript
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettier,
    },
    rules: {
      ...eslint.configs.recommended.rules, // Regras básicas do ESLint
      ...tseslint.configs.recommended.rules, // Regras recomendadas do TypeScript
      ...prettier.configs.recommended.rules, // Regras do Prettier
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      'prettier/prettier': ['error'],
    },
  },
  // Configurações de ambiente e ignores
  {
    ignores: ['.eslintrc.js'],
    languageOptions: {
      globals: {
        ...globals.node, // Use globals.node
        ...globals.jest, // Use globals.jest
      },
    },
  },
];