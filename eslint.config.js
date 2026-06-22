import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default tseslint.config(
  // 忽略构建产物与依赖
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/*.d.ts',
      '.husky/**',
    ],
  },

  // JS 推荐规则
  js.configs.recommended,

  // TypeScript 推荐规则
  ...tseslint.configs.recommended,

  // Vue3 推荐规则（flat config）
  ...pluginVue.configs['flat/recommended'],

  // Vue 单文件组件中 <script> 使用 TS 解析
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },

  // 通用语言环境与自定义规则
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // 组件名允许单个单词（如 App、index 等）
      'vue/multi-word-component-names': 'off',
      // 允许显式 any（项目初期较宽松，可按需收紧）
      '@typescript-eslint/no-explicit-any': 'warn',
      // 未使用变量告警，允许下划线前缀忽略
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      // 允许三元/短路表达式作为语句（qiankun 入口的常见写法）
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowTernary: true, allowShortCircuit: true },
      ],
    },
  }
);
