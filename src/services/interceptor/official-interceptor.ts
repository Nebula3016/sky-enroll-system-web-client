/**
 * 正式版本请求拦截器
 * @param config 请求配置
 * @returns 请求配置
 */
export async function officialRequestInterceptor(
  config: IAxiosTypes.InternalAxiosRequestConfig,
): Promise<IAxiosTypes.InternalAxiosRequestConfig> {
  return config;
}

/**
 * 正式版本响应拦截器
 * @param response 响应
 * @returns 响应
 */
export async function officialResponseInterceptor(
  response: IAxiosTypes.AxiosResponse,
): Promise<IAxiosTypes.AxiosResponse> {
  return response;
}
