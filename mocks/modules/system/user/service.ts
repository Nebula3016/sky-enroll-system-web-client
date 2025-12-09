import { UserRepository } from './repository';
import { authService } from '../auth/service';
import type { CurrentUserInfo, GetCurrentUserInfoResponse } from './types/user';

/**
 * 用户服务类
 * 负责用户相关的业务逻辑处理
 */
export class UserService {
  /**
   * 获取当前用户信息
   * @param token JWT Token
   * @returns 当前用户信息响应
   */
  static getCurrentUserInfo(token: string): GetCurrentUserInfoResponse {
    try {
      // 解析token获取用户账号
      const account = this.parseAccountFromToken(token);

      if (!account) {
        return {
          code: 0,
          message: '无法解析用户信息',
          data: undefined
        };
      }

      // 根据账号获取用户信息
      const userInfo = UserRepository.getCurrentUserInfoByAccount(account);
      if (!userInfo) {
        return {
          code: 0,
          message: '用户不存在',
          data: undefined
        };
      }

      return {
        code: 1,
        message: '获取用户信息成功',
        data: userInfo
      };
    } catch (error) {
      console.error('获取当前用户信息失败:', error);
      return {
        code: 0,
        message: '获取用户信息失败',
        data: undefined
      };
    }
  }

  /**
   * 从token中解析用户账号
   * @param token JWT Token
   * @returns 用户账号或null
   */
  private static parseAccountFromToken(token: string): string | null {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        return null;
      }

      const [, payloadBase64] = parts;
      const payload = JSON.parse(Buffer.from(payloadBase64, 'base64').toString());

      // 返回payload中的账号信息
      return payload.account || payload.username || null;
    } catch {
      return null;
    }
  }
}

export const userService = UserService;
