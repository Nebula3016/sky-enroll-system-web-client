import { SystemRouterTypeEnum } from '../../router.enum';

/**
 * @description 系统角色路由配置
 */
export default {
  path: `/role`,
  name: 'RoleView',
  component: () => import('@/screens/views/system/role/index.vue'),
  meta: {
    type: SystemRouterTypeEnum.MENU,
    title: '角色管理',
    icon: 'icon-role',
    roles: ['admin'],
    requiredAuth: true,
    isVisible: true,
    isKeepAlive: true,
    isDisabled: false,
    order: 40,
  },
} as IRouterTypes.RouteRecordRaw;
