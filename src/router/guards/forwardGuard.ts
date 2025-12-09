import { handleUserLoginStatusJumpToLoginHelp, handleUserTokenExpiredHelp } from '@/common';
import { useUserStore } from '@/stores';

/**
 * globalAdvanceGuard 函数 - 全局前置路由守卫
 * @param {Object} to - 跳转目标路由对象
 * @param {Object} from - 当前路由对象
 * @param {Function} next - 下一步的回调函数
 */
export async function globalAdvanceGuard(
  to: IRouterTypes.RouteLocationNormalized,
  from: IRouterTypes.RouteLocationNormalizedLoaded,
  next: IRouterTypes.NavigationGuardNext,
) {
  const userStore = useUserStore();

  if (to.meta.requiredAuth) {
    if (!!userStore.userToken) {
      next();
    } else {
      handleUserTokenExpiredHelp();
      next({ name: 'Login' });
    }
  } else {
    if (to.name === 'Login' && !!userStore.userToken) {
      handleUserLoginStatusJumpToLoginHelp();
      next({ name: 'FirstEditionManage' });
    } else {
      next();
    }
  }
}
