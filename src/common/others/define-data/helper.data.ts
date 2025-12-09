/**
 * @type {authenticationHelpTypes.LogOutToHandleTheConfig}
 * @description 退出登录处理配置默认值
 */
export const logOutToHandleTheConfigDefault: authenticationHelperTypes.LogOutToHandleTheConfig = {
  isConfirm: false,
  redirectToLogin: true,
  hintOption: {
    isHint: true,
    type: 'success',
    title: '退出登录成功',
    message: '您已成功退出OA系统登录',

    duration: 6000,
  },
};
