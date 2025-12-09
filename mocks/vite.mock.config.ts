import type { ViteMockOptions } from 'vite-plugin-mock';

/**
 * 函数 - 创建 mock 配置项
 * @param {String} command - 命令名称
 * @param {String} mode - 运行模式
 * @returns {Object} mock 配置项
 */
export default (command: 'build' | 'serve', mode: string): ViteMockOptions => ({
  mockPath: 'mocks',
  enable: true,
  watchFiles: true,
  logger: true,
  ignore: undefined,
  cors: true,
});
