import { AxiosTools } from '@/utils';
import { officialRequestInterceptor, officialResponseInterceptor } from './interceptor/official-interceptor';
import {
  demonstrationErrorInterceptor,
  demonstrationRequestInterceptor,
  demonstrationResponseInterceptor,
} from './interceptor/demonstration-interceptor';
import { createLoadingService } from '../common/plugins/el-element';
import { SystemHttpRequestModeEnum, getEnvVariableHelp } from '@/common';

const { create } = AxiosTools.default;

export default class RequestAdaptorService {
  /**
   * 单例模式，确保只有一个实例
   */
  public static instance: RequestAdaptorService | null;
  /**
   * 正式模式请求实例
   */
  private readonly officialRequestInstance: IAxiosTypes.Axios;
  /**
   * 演示模式请求实例
   */
  private readonly demonstrationRequestInstance: IAxiosTypes.Axios;
  /**
   * 请求模式（official：正式版本，demonstration：演示版本）
   */
  private requestMode: typeof SystemHttpRequestModeEnum | undefined;
  /**
   * 请求加载实例
   */
  private loadingInstance!: IElementTypes.LoadingInstance | null;

  constructor() {
    this.requestMode = getEnvVariableHelp('VITE_APP_VERSION_MODE') as unknown as typeof SystemHttpRequestModeEnum;
    this.officialRequestInstance = this.initOfficialRequestInstance();
    this.demonstrationRequestInstance = this.initDemonstrationRequestInstance();
  }

  /**
   * 初始化正式模式请求实例
   */
  private initOfficialRequestInstance() {
    const requestInstance = create({
      baseURL: getEnvVariableHelp('VITE_SYSTEM_SERVER_HOST'),
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 15000,
    });
    requestInstance.interceptors.request.use(officialRequestInterceptor);
    requestInstance.interceptors.response.use(officialResponseInterceptor);

    return requestInstance;
  }

  /**
   * 初始化演示模式请求实例
   */
  private initDemonstrationRequestInstance() {
    const requestInstance = create({
      baseURL: getEnvVariableHelp('VITE_API_DEMO_BASE_URL'),
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });
    requestInstance.interceptors.request.use(demonstrationRequestInterceptor, demonstrationErrorInterceptor);
    requestInstance.interceptors.response.use(demonstrationResponseInterceptor, demonstrationErrorInterceptor);

    return requestInstance;
  }

  /**
   * 发送GET请求
   * @param url 请求URL
   * @param config 请求配置
   * @returns 响应数据
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async get<T = any>(url: string, config: IAxiosTypes.AxiosRequestConfig = {}): Promise<T> {
    if (config?.loadingConfig?.showLoading) {
      this.loadingInstance = createLoadingService(config.loadingConfig?.loadingConfig || {});
    }
    try {
      const response = await this.getRequestInstance.get(url, config);
      return response as T;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return Promise.reject(error);
    } finally {
      if (!!this.loadingInstance) {
        this.loadingInstance.close();
        this.loadingInstance = null;
      }
    }
  }

  /**
   * 发送POST请求
   * @param url 请求URL
   * @param data 请求数据
   * @param config 请求配置
   * @returns 响应数据
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async post<T = any>(url: string, data?: any, config: IAxiosTypes.AxiosRequestConfig = {}): Promise<T> {
    try {
      const response = await this.getRequestInstance.post(url, data, config);
      return response as T;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return Promise.reject(error);
    }
  }

  /**
   * 发送PUT请求
   * @param url 请求URL
   * @param data 请求数据
   * @param config 请求配置
   * @returns 响应数据
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async put<T = any>(url: string, data?: any, config?: IAxiosTypes.AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.getRequestInstance.put(url, data, config);
      return response as T;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return Promise.reject(error);
    }
  }

  /**
   * 发送 PATCH 请求
   * @param url 请求 URL
   * @param data 请求数据
   * @param config 请求配置
   * @returns 响应数据
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async patch<T = any>(url: string, data?: any, config?: IAxiosTypes.AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.getRequestInstance.patch(url, data, config);
      return response as T;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return Promise.reject(error);
    }
  }

  /**
   * 发送DELETE请求
   * @param url 请求URL
   * @param config 请求配置
   * @returns 响应数据
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async delete<T = any>(
    url: string,
    config?: IAxiosTypes.AxiosRequestConfig & IAxiosTypes.AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response = await this.getRequestInstance.delete(url, config);
      return response as T;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return Promise.reject(error);
    }
  }

  /**
   * 批量请求（并发执行）
   * @param config 批量请求配置
   * @returns Promise<BatchRequestResult[]>
   */

  /**
   * 请求重试机制（指数退避）
   * @param requestFn 请求函数
   * @param maxRetries 最大重试次数，默认 3
   * @param retryDelay 首次重试延迟（毫秒），默认 1000
   * @param onRetry 可选的回调，每次重试时触发
   * @returns Promise<T>
   */
  async retry<T>(
    requestFn: () => Promise<T>,
    maxRetries: number = 3,
    retryDelay: number = 1000,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onRetry?: (error: any, attempt: number) => void,
  ): Promise<T> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lastError: any;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await requestFn();
      } catch (error) {
        lastError = error;
        if (attempt === maxRetries) break;
        if (onRetry) onRetry(error, attempt + 1);
        await new Promise(resolve => setTimeout(resolve, retryDelay * Math.pow(2, attempt)));
      }
    }
    throw lastError;
  }

  /**
   * 获取请求实例（根据当前版本模式）
   * @returns 请求实例
   */
  public get getRequestInstance(): IAxiosTypes.Axios {
    const requestMode: string | undefined = getEnvVariableHelp('VITE_APP_VERSION_MODE');
    if (requestMode === SystemHttpRequestModeEnum.Official) {
      return this.officialRequestInstance;
    } else if (requestMode === SystemHttpRequestModeEnum.Demonstration) {
      return this.demonstrationRequestInstance;
    }
    return this.demonstrationRequestInstance;
  }

  /**
   * 设置请求模式
   * @param mode 请求模式（official：正式版本，demonstration：演示版本）
   */
  public set setRequestMode(mode: typeof SystemHttpRequestModeEnum) {
    this.requestMode = mode;
  }

  /**
   * 获取请求模式
   * @returns 请求模式（official：正式版本，demonstration：演示版本）
   */
  public get getRequestMode(): typeof SystemHttpRequestModeEnum | undefined {
    return this.requestMode;
  }

  /**
   * 获取单例实例
   * @returns 单例实例
   */
  public static getInstance(): RequestAdaptorService {
    if (!!!RequestAdaptorService.instance) {
      RequestAdaptorService.instance = new RequestAdaptorService();
    }
    return RequestAdaptorService.instance;
  }
}

/**
 * 请求适配器服务实例
 */
export const requestAdaptorService = RequestAdaptorService.getInstance();
