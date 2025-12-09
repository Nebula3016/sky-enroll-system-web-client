import { SystemRouterTypeEnum } from '../../router.enum';

/**
 * @description 系统日志路由配置
 */
export default {
  path: `/log`,
  name: 'LogView',
  component: () => import('@/screens/views/system/log/index.vue'),
  meta: {
    type: SystemRouterTypeEnum.MENU,
    title: '日志管理',
    icon: 'icon-log',
    roles: ['admin'],
    requiredAuth: true,
    isVisible: true,
    isKeepAlive: true,
    isDisabled: false,
    order: 100,
  },
} as IRouterTypes.RouteRecordRaw;
