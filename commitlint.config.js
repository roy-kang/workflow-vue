const types = [
  'feat',     // 新增功能
  'fix',      // bug 修复
  'docs',     // 文档更新
  'style',    // 代码修改
  'refactor', // 重构代码
  'perf',     // 性能优化
  'test',     // 新增或更新现有测试
  'build',    // 修改项目构建系统
  'chore',    // 其它类型，日期事务
  'revert'    // 回滚之前提交
];

module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types],
    'scope-case': [0, 'always'],
    'subject-empty': [2, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [2, 'always', 88],
  }
}
