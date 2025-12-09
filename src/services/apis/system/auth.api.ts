import request from '../../index.ts';

const AUTH_PREFIX: string = '/auth';

/**
 * 获取图形验证码
 * @returns 返回后端返回的数据
 */
export const getGraphCaptchaApi = async () => {
  const response = await request.get(`${AUTH_PREFIX}/graph-captcha`);
  return response.data;
};

/**
 * 用户账号登录
 * @param data 登录参数
 * @returns 返回后端返回的数据
 */
export const userAccountLoginApi = async (data: IAuthTypes.LoginRequest) => {
  const response = await request.post(`${AUTH_PREFIX}/account-login`, data);
  return response.data;
};
