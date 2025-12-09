/**
 * 获取环境变量（帮助函数）
 * @param key 环境变量键名
 * @returns 环境变量值（如果不存在则返回 undefined）
 */
export function getEnvVariableHelp(key: string): string | undefined {
  return import.meta.env[key] ?? undefined;
}
