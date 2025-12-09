import { SystemRouterTypeEnum } from '../../router.enum';

/**
 * @description 系统字典路由配置
 */
export default {
  path: `/permission`,
  name: 'PermissionView',
  component: () => import('@/screens/views/system/permission/index.vue'),
  meta: {
    type: SystemRouterTypeEnum.MENU,
    title: '权限管理',
    icon: 'icon-permission',
    roles: ['admin'],
    requiredAuth: true,
    isVisible: true,
    isKeepAlive: true,
    isDisabled: false,
    order: 50,
  },
} as IRouterTypes.RouteRecordRaw;
