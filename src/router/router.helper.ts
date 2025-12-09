import { RouterHistoryModeEnum } from './router.enum.ts';
import { VueRouterTools } from '@/utils/index.ts';

/**
 * @description 获取路由历史模式
 * @param routerHistoryMode 路由历史模式
 * @returns 路由历史模式
 */
export function getHistoryMode(
  routerHistoryMode: IRouterTypes.RouterHistoryModeType = RouterHistoryModeEnum.HASH,
): IRouterTypes.RouterHistory {
  const { createWebHashHistory, createWebHistory } = VueRouterTools;
  const historyMode: IRouterTypes.RouterHistoryModeType[] = routerHistoryMode.split(',') as IRouterTypes.RouterHistoryModeType[];
  if (historyMode.length === 1) {
    if (historyMode[0] === RouterHistoryModeEnum.HASH) {
      return createWebHashHistory();
    } else if (historyMode[0] === RouterHistoryModeEnum.HISTORY) {
      return createWebHistory();
    }
  } else if (historyMode.length === 2) {
    const [mode, base] = historyMode;
    if (mode === RouterHistoryModeEnum.HASH) {
      return createWebHashHistory(base);
    } else if (mode === RouterHistoryModeEnum.HISTORY) {
      return createWebHistory(base);
    }
  }
  return createWebHashHistory();
}
