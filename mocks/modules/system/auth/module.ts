import { accountLoginController, getGraphCaptchaController } from './controller';

export default [
  // 用户账号登录
  {
    url: '/auth/account-login',
    method: 'post',
    response: accountLoginController,
  },
  // 获取图形验证码
  {
    url: '/auth/graph-captcha',
    method: 'get',
    response: getGraphCaptchaController,
  },
];
