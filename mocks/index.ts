import authModule from './modules/system/auth/module.ts';
import menuModule from './modules/system/menu/module.ts';
import userModule from './modules/system/user/module.ts';

const BASE_API: string = '/mock-api';

export default [
  {
    url: `${BASE_API}/`,
    method: 'get',
    response: (req: any) => ({
      status: 200,
      code: 1,
      message: '成功了！',
      data: {},
    }),
  },

  ...authModule.map(item => ({ ...item, url: BASE_API + item.url })),
  ...menuModule.map(item => ({ ...item, url: BASE_API + item.url })),
  ...userModule.map(item => ({ ...item, url: BASE_API + item.url })),
];
