import { SystemRouterClassifyEnum, SystemRouterTypeEnum } from '../router.enum';
import homeRoutes from './common/home.route';
import dictRoutes from './system/dict.route';
import logRoutes from './system/log.route';
import menuRoutes from './system/menu.route';
import roleRoutes from './system/role.route';
import tenantRoutes from './system/tenant.route';
import timedTaskRoutes from './system/timed-task.route';
import userRoutes from './system/user.route';
import permissionRoutes from './system/permission.route.ts';

export { homeRoutes, dictRoutes, logRoutes, menuRoutes, roleRoutes, tenantRoutes, timedTaskRoutes, userRoutes, permissionRoutes };

export default [
  {
    path: '/manage',
    name: 'FirstEditionManage',
    component: () => import('@/screens/layouts/first-edition-manage/index.vue'),
    children: [homeRoutes].map(route => ({
      ...route,
      path: `/manage${route.path}`,
    })),
    meta: {
      title: '第一版管理',
      type: SystemRouterTypeEnum.ROOT,
      icon: 'icon-first-edition-manage',
      roles: ['admin'],
      requiredAuth: true,
      isVisible: true,
      isKeepAlive: true,
      isDisabled: false,
      order: 100,
    },
  },
  {
    path: `/${SystemRouterClassifyEnum.SYSTEM}`,
    name: 'SystemPage',
    component: () => import('@/screens/layouts/first-edition-manage/index.vue'),
    children: [userRoutes, menuRoutes, roleRoutes, dictRoutes, logRoutes, tenantRoutes, timedTaskRoutes, permissionRoutes].map(
      route => ({
        ...route,
        path: `/${SystemRouterClassifyEnum.SYSTEM}${route.path}`,
      }),
    ),
    meta: {
      type: SystemRouterTypeEnum.CATALOG,
      title: '系统管理',
      icon: 'icon-system',
      roles: ['admin'],
      isVisible: true,
      isKeepAlive: true,
      order: 100,
    },
  },
] as IRouterTypes.RouteRecordRawList;
