import { useUserStore } from '@/stores';
import HttpStatusExceptionHandle from '../exception/http-status-exception';

/**
 * 演示版本请求拦截器
 * @param config 请求配置
 * @returns 请求配置
 */
export async function demonstrationRequestInterceptor(
  config: IAxiosTypes.InternalAxiosRequestConfig,
): Promise<IAxiosTypes.InternalAxiosRequestConfig> {
  const userStore = useUserStore();
  const { userToken = '' } = userStore;

  if (!!userToken) config.headers['Authorization'] = `Bearer ${userToken}`;

  return config;
}

/**
 * 演示版本响应拦截器
 * @param response 响应
 * @returns 响应
 */
export async function demonstrationResponseInterceptor(
  response: IAxiosTypes.AxiosResponse,
): Promise<IAxiosTypes.AxiosResponse> {
  return response;
}

/**
 * 演示版本错误拦截器
 * @param error 错误
 * @returns 错误
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function demonstrationErrorInterceptor(error: any): number {
  HttpStatusExceptionHandle(error);
  return error;
}
