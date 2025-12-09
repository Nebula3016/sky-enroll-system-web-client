import { SystemRouterTypeEnum } from '../../router.enum';

/**
 * @description 系统定时任务路由配置
 */
export default {
  path: `/timed-task`,
  name: 'TimedTaskView',
  component: () => import('@/screens/views/system/timed-task/index.vue'),
  meta: {
    type: SystemRouterTypeEnum.MENU,
    title: '定时任务管理',
    icon: 'icon-timed-task',
    roles: ['admin'],
    requiredAuth: true,
    isVisible: true,
    isKeepAlive: true,
    isDisabled: false,
    order: 100,
  },
} as IRouterTypes.RouteRecordRaw;
