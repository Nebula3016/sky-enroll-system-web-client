import type {
  RouterHistory,
  RouteRecordRaw,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
  NavigationGuardNext,
} from 'vue-router';
import type { RouterHistoryModeEnum, SystemRouterTypeEnum } from './router.enum';

declare global {
  /**
   * @namespace IRouterTypes
   * @description 路由相关类型定义
   */
  namespace IRouterTypes {
    /**
     * @type RouterHistoryModeType
     * @description 路由历史模式类型
     */
    export type RouterHistoryModeType = RouterHistoryModeEnum;

    /**
     * @type RouteRecordRawList
     * @description 路由记录列表类型
     */
    export type RouteRecordRawList = RouteRecordRaw[];

    /**
     * @type RouteMeta
     * @description 路由菜单元信息类型
     */
    export interface RouteMetaInterface {
      /** 路由菜单类型 */
      type?: SystemRouterTypeEnum;
      /** 路由菜单标题 */
      title?: string;
      /** 路由菜单图标 */
      icon?: string;
      /** 路由菜单权限角色 */
      roles?: string[];
      /** 是否需要权限认证 */
      requiredAuth?: boolean;
      /** 是否可见 */
      isVisible?: boolean;
      /** 是否缓存路由菜单 */
      isKeepAlive?: boolean;
      /** 是否禁用路由菜单 */
      isDisabled?: boolean;
      /** 路由菜单排序 */
      order?: number;
    }

    export type { RouterHistory };
    export type { RouteRecordRaw };
    export type { RouteLocationNormalized };
    export type { RouteLocationNormalizedLoaded };
    export type { NavigationGuardNext };
  }
}

export {};
