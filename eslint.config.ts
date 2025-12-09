import pluginVitest from '@vitest/eslint-plugin';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import { globalIgnores } from 'eslint/config';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  // Custom rules configuration
  {
    name: 'app/custom-rules',
    files: ['**/*.{ts,mts,tsx,vue,js,jsx}'],
    rules: {
      // Quote rules - enforce double quotes with template literals allowed
      quotes: ['error', 'single', { allowTemplateLiterals: true }],

      // Indentation - disabled to let Prettier handle it
      indent: 'off',
      '@typescript-eslint/indent': 'off',

      // Semicolon rules - enforce semicolons
      semi: ['error', 'always'],
      '@typescript-eslint/semi': ['error', 'always'],

      // Variable declaration rules
      'no-var': 'warn',

      // Console and debugging rules
      'no-console': 'warn',
      'no-debugger': 'warn',

      // Empty block rules
      'no-empty': 'warn',

      // Vue specific overrides for quotes
      'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],

      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  skipFormatting,
);
