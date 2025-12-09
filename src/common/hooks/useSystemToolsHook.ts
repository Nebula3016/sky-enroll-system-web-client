import { getEnvVariableHelp, isDevEnvHelp } from '@/common';

export default function useSystemToolsHook() {
  /**
   * 获取环境变量
   * @param key 环境变量键名
   * @returns 环境变量值（如果不存在则返回 undefined）
   */
  function getEnvVariable(key: string): string | undefined {
    return getEnvVariableHelp(key);
  }

  /**
   * 是否是开发环境
   * @returns 是否是开发环境（true：开发环境，false：非开发环境）
   */
  function isDevEnv(): boolean {
    return isDevEnvHelp();
  }

  return {
    getEnvVariable,
    isDevEnv,
  };
}
