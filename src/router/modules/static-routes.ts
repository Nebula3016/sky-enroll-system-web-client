import LoginView from '@/screens/pages/login/index.vue';
import { SystemRouterTypeEnum } from '../router.enum';
import { homeRoutes } from './dynamic-routing';

export default [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: {
      title: '登录',
      requiredAuth: false,
    },
  },
  {
    path: '/manage',
    name: 'FirstEditionManage',
    component: () => import('@/screens/layouts/first-edition-manage/index.vue'),
    children: [],
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
] as IRouterTypes.RouteRecordRawList;
