import request from '../../index.ts';

const USER_PREFIX: string = '/user';

/**
 * 获取当前用户信息
 * @returns 当前用户信息
 */
export const getCurrentUserInfoApi = async () => {
  const response = await request.get(`${USER_PREFIX}/current-user-info`);
  return response.data;
};
