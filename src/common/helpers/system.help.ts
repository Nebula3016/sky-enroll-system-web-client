import { SystemEnvEnum } from '../enums/system.enum';
import { getEnvVariableHelp } from './env.help';

/**
 * 是否是开发环境
 * @returns 是否是开发环境（true：开发环境，false：非开发环境）
 */
export function isDevEnvHelp(): boolean {
  const env: string | undefined = getEnvVariableHelp('VITE_SYSTEM_ENV');
  return env === SystemEnvEnum.Development;
}
