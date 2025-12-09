import { SystemRouterTypeEnum } from '../../router.enum';

/**
 * @description 系统字典路由配置
 */
export default {
  path: `/dict`,
  name: 'DictView',
  component: () => import('@/screens/views/system/dict/index.vue'),
  meta: {
    type: SystemRouterTypeEnum.MENU,
    title: '字典管理',
    icon: 'icon-dict',
    roles: ['admin'],
    requiredAuth: true,
    isVisible: true,
    isKeepAlive: true,
    isDisabled: false,
    order: 100,
  },
} as IRouterTypes.RouteRecordRaw;
