import type { Axios, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

declare global {
  namespace IAxiosTypes {
    export type { Axios, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig };
  }
}

declare module 'axios' {
  interface AxiosRequestConfig {
    /** 是否静默处理错误（接口报错时是否进行提示【true：静默不提示，false | undefined：提示，默认值：undefined】） */
    silentOnError?: boolean | undefined;
    /** 请求加载配置对象 */
    loadingConfig?: {
      /** 是否显示加载中状态（true：显示，false：不显示，默认值：true） */
      showLoading?: boolean;
      loadingConfig?: IElementTypes.LoadingOptions;
    };
  }
}

export {};
