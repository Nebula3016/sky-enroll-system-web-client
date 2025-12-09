// 清理系统所有的缓存以及store存储
import { useUserStore } from '@/stores';

/**
 * 清理系统所有的缓存以及store存储
 * @param config 清理配置
 */
export function clearSystemCacheAndStoreHelp(config?: ClearHelperTypes.ClearSystemCacheAndStoreConfig) {
  window.sessionStorage.clear();
  window.localStorage.clear();
  useUserStore().clearUserStore();
}
