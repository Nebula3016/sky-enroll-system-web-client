import { logOutToHandleTheConfigDefault } from '@/common/others/default-data/helper.data';
import { clearSystemCacheAndStoreHelp, createNotificationService } from '@/common';
import { useAppStore } from '@/stores';

/**
 * @function handleLogoutHelp
 * @description 处理退出登录，清理系统所有有关需要鉴权的缓存以及store存储
 * @param {authenticationHelperTypes.LogOutToHandleTheConfig} config 退出登录处理配置
 */
export function handleLogoutHelp(config?: authenticationHelperTypes.LogOutToHandleTheConfig) {
  const finalConfig = { ...logOutToHandleTheConfigDefault, ...config };
  const appStore = useAppStore();

  finalConfig.preCallback?.();

  clearSystemCacheAndStoreHelp();

  if (finalConfig.hintOption?.isHint) {
    createNotificationService({
      ...(finalConfig.hintOption?.title && { title: finalConfig.hintOption?.title }),
      ...(finalConfig.hintOption?.message && { message: finalConfig.hintOption?.message }),
      ...(finalConfig.hintOption?.type && { type: finalConfig.hintOption?.type }),
      ...(finalConfig.hintOption?.duration && { duration: finalConfig.hintOption?.duration }),
    });
  }

  if (finalConfig.redirectToLogin && typeof finalConfig.customRedirectHook !== 'function') {
    appStore.router.replace({ name: 'Login' });
  } else {
    finalConfig.customRedirectHook?.();
  }

  finalConfig.afterCallback?.();
}
