import { SystemRouterTypeEnum } from '../../router.enum';

/**
 * @description 系统字典路由配置
 */
export default {
  path: `/manage/home`,
  name: 'HomeView',
  component: () => import('@/screens/views/other/home/index.vue'),
  meta: {
    type: SystemRouterTypeEnum.MENU,
    title: '系统首页',
    icon: 'icon-home',
    roles: ['admin'],
    requiredAuth: true,
    isVisible: true,
    isKeepAlive: true,
    isDisabled: false,
    order: 10,
  },
} as IRouterTypes.RouteRecordRaw;
