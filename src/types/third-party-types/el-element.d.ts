import type {
  FormInstance,
  LoadingOptions,
  LoadingInstance,
  NotificationParams,
  NotificationHandle,
  ElMessageBoxOptions,
  MessageBoxData,
} from 'element-plus';

declare global {
  namespace IElementTypes {
    export {
      FormInstance,
      LoadingOptions,
      LoadingInstance,
      NotificationParams,
      NotificationHandle,
      ElMessageBoxOptions,
      MessageBoxData,
    };
  }
}

export {};
