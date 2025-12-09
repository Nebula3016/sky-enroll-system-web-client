import { SystemRouterTypeEnum } from '../../router.enum';

/**
 * @description 系统菜单路由配置
 */
export default {
  path: `/menu`,
  name: 'MenuView',
  component: () => import('@/screens/views/system/menu/index.vue'),
  meta: {
    type: SystemRouterTypeEnum.MENU,
    title: '菜单管理',
    icon: 'icon-menu',
    roles: ['admin'],
    requiredAuth: true,
    isVisible: true,
    isKeepAlive: true,
    isDisabled: false,
    order: 20,
  },
} as IRouterTypes.RouteRecordRaw;
