declare global {
  namespace authenticationHelperTypes {
    /**
     * 退出登录处理配置
     */
    export interface LogOutToHandleTheConfig {
      /** 退出登录时是否提示用户确认 */
      isConfirm?: boolean;

      /** 退出登录时是否跳转链接至登录界面 */
      redirectToLogin?: boolean;

      /** 提示配置选项 */
      hintOption?: {
        /** 退出登录时是否提示用户退出登录成功 */
        isHint: boolean;

        /** 提示类型 */
        type?: 'warning' | 'success' | 'info' | 'error';

        /** 提示标题 */
        title?: string;

        /** 提示消息 */
        message?: string;

        /** 提示持续时间（单位：毫秒） */
        duration?: number;
      };

      /** 退出登录前的回调函数 */
      preCallback?: () => void;

      /** 退出登录成功后的回调函数 */
      afterCallback?: () => void;

      /** 自定义跳转方式钩子函数（如果设置了 customRedirectHook 回调，则不会执行跳转至登录界面） */
      customRedirectHook?: () => void;
    }
  }
}

export {};
