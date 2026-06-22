/**
 * Commit message 规范配置（基于 Conventional Commits）
 * 格式: <type>(<scope>): <subject>
 * 示例: feat(login): 新增记住密码功能
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 必填，且只能为下列之一
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复 bug
        'docs', // 文档变更
        'style', // 代码格式（不影响逻辑，如空格、分号）
        'refactor', // 重构（既不是新增功能，也不是修复 bug）
        'perf', // 性能优化
        'test', // 增加或修改测试
        'build', // 构建系统或外部依赖变更（如 webpack、pnpm）
        'ci', // CI 配置变更
        'chore', // 其他杂项（不修改 src 或测试文件）
        'revert', // 回滚某次提交
      ],
    ],
    'type-case': [2, 'always', 'lower-case'], // type 必须小写
    'type-empty': [2, 'never'], // type 不能为空
    'subject-empty': [2, 'never'], // 描述不能为空
    'subject-full-stop': [2, 'never', '.'], // 描述结尾不能有句号
    'header-max-length': [2, 'always', 100], // header 最长 100 字符
  },
};
