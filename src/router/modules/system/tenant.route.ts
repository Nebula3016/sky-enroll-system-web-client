import { SystemRouterTypeEnum } from '../../router.enum';

/**
 * @description 系统租户路由配置
 */
export default {
  path: `/tenant`,
  name: 'TenantView',
  component: () => import('@/screens/views/system/tenant/index.vue'),
  meta: {
    type: SystemRouterTypeEnum.MENU,
    title: '租户管理',
    icon: 'icon-tenant',
    roles: ['admin'],
    requiredAuth: true,
    isVisible: true,
    isKeepAlive: true,
    isDisabled: false,
    order: 10,
  },
} as IRouterTypes.RouteRecordRaw;
