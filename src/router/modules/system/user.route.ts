import { SystemRouterTypeEnum } from '../../router.enum';

/**
 * @description 系统菜单路由配置
 */
export default {
  path: `/user`,
  name: 'UserView',
  component: () => import('@/screens/views/system/user/index.vue'),
  meta: {
    type: SystemRouterTypeEnum.MENU,
    title: '用户管理',
    icon: 'icon-user',
    roles: ['admin'],
    requiredAuth: true,
    isVisible: true,
    isKeepAlive: true,
    isDisabled: false,
    order: 30,
  },
} as IRouterTypes.RouteRecordRaw;
