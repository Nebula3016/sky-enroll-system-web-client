import { createNotificationService } from '@/common/plugins/el-element';

/**
 * 处理用户token过期
 */
export function handleUserTokenExpiredHelp() {
  createNotificationService({
    title: '提示',
    message: '用户登录过期，请重新登录',
    type: 'warning',
    duration: 6000,
  });
}

/**
 * 处理用户登录状态跳转至登录界面
 */
export function handleUserLoginStatusJumpToLoginHelp() {
  createNotificationService({
    title: '提示',
    message: '用户已登录，无需重复登录',
    type: 'info',
    duration: 6000,
  });
}
