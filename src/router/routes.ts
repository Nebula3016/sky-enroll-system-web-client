import staticRoutes from './modules/static-routes';
import dynamicRoutes from './modules/dynamic-routing';

export default [
  {
    path: '/',
    name: 'App',
    redirect: { name: 'Login' },
    meta: {},
  },
  ...staticRoutes,
  ...dynamicRoutes,
] as IRouterTypes.RouteRecordRawList;
