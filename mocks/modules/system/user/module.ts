import {
  getUserListController,
  addUserController,
  editUserController,
  deleteUserController,
  getCurrentUserController,
  getUserDetailController,
  getUserStatsController,
  getCurrentUserInfoController
} from './controller';

export default [
  // 获取用户列表（支持分页、搜索、筛选）
  {
    url: '/user/list',
    method: 'get',
    response: getUserListController,
  },
  // 添加用户
  {
    url: '/user/add',
    method: 'post',
    response: addUserController,
  },
  // 编辑用户
  {
    url: '/user/edit',
    method: 'put',
    response: editUserController,
  },
  // 删除用户
  {
    url: '/user/delete',
    method: 'delete',
    response: deleteUserController,
  },
  // 获取当前登录用户详情
  {
    url: '/user/current',
    method: 'get',
    response: getCurrentUserController,
  },
  // 获取用户详情
  {
    url: '/user/detail',
    method: 'get',
    response: getUserDetailController,
  },
  // 获取当前登录用户信息
  {
    url: '/user/current-user-info',
    method: 'get',
    response: getCurrentUserInfoController,
  },
  // 获取用户统计信息
  {
    url: '/user/stats',
    method: 'get',
    response: getUserStatsController,
  },
];
