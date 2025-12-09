import 'element-plus/dist/index.css';
import '@/assets/styles/scss/element.scss';
import ElementPlus, { ElLoading, ElNotification, ElMessageBox } from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

/**
 * 使用 Element Plus 加载服务
 * @param options 加载服务选项
 * @returns 加载实例
 */
export function createLoadingService(options?: IElementTypes.LoadingOptions): IElementTypes.LoadingInstance {
  const defaultOptions: IElementTypes.LoadingOptions = {
    target: 'body',
    text: '加载中...',
    spinner: 'global-el-loading-body',
    ...options,
  };
  return ElLoading.service(defaultOptions);
}

/**
 * 使用 Element Plus 通知服务
 * @param options 通知服务选项
 */
export function createNotificationService(options?: IElementTypes.NotificationParams): IElementTypes.NotificationHandle {
  const defaultOptions: IElementTypes.NotificationParams = {
    title: '提示',
    message: '',
    ...(typeof options === 'object' ? options : {}),
  } as IElementTypes.NotificationParams;
  return ElNotification(defaultOptions);
}

// 创建消息弹出框服务
export function createMessageBoxService(options?: IElementTypes.ElMessageBoxOptions): Promise<IElementTypes.MessageBoxData> {
  const defaultOptions: IElementTypes.ElMessageBoxOptions = {
    title: '消息提示框',
    message: '',
    ...(typeof options === 'object' ? options : {}),
  } as IElementTypes.ElMessageBoxOptions;
  return ElMessageBox(defaultOptions);
}

/**
 * 注册 Element Plus 插件
 * @param app Vue 应用实例
 */
export function useRegisterElementPlus(app: IVueTypes.App<Element>) {
  app.use(ElementPlus);
}

export { zhCn, ElLoading };
