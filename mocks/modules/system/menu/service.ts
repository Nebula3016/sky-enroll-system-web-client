import { MenuRepository } from './repository';
import type { MenuTreeNode, GetMenuTreeListResponse } from './types/menu';
import { UserRepository } from '../user/repository';

/**
 * 菜单服务类
 * 负责菜单相关的业务逻辑处理
 */
export class MenuService {
  /**
   * 获取菜单树列表
   * @param token JWT Token（可选，用于权限过滤）
   * @returns 菜单树列表响应
   */
  static getMenuTreeList(token?: string): GetMenuTreeListResponse {
    try {
      let userRoles: string[] = [];

      // 如果提供了token，先验证token有效性
      if (token) {
        // 验证token格式和有效性
        if (!this.verifyToken(token)) {
          return {
            code: 0,
            message: 'Token无效或已过期',
            data: []
          };
        }

        const account = this.parseAccountFromToken(token);
        if (account) {
          const userInfo = UserRepository.getCurrentUserInfoByAccount(account);
          if (userInfo) {
            userRoles = userInfo.roles || [];
          } else {
            return {
              code: 0,
              message: '用户不存在',
              data: []
            };
          }
        } else {
          return {
            code: 0,
            message: 'Token解析失败',
            data: []
          };
        }
      }

      // 获取菜单数据
      let menus;
      if (userRoles.length > 0) {
        // 根据用户角色过滤菜单
        menus = MenuRepository.getMenusByRoles(userRoles);
      } else {
        // 获取所有菜单（无权限限制）
        menus = MenuRepository.getAllMenus();
      }

      // 构建菜单树
      const menuTree = MenuRepository.buildMenuTree(menus);

      return {
        code: 1,
        message: '获取菜单树列表成功',
        data: menuTree
      };
    } catch (error) {
      console.error('获取菜单树列表失败:', error);
      return {
        code: 0,
        message: '获取菜单树列表失败',
        data: []
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
      // 移除Bearer前缀
      const actualToken = token.startsWith('Bearer ') ? token.replace('Bearer ', '') : token;
      
      const parts = actualToken.split('.');
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

  /**
   * 验证Token是否有效
   * @param token JWT Token
   * @returns 是否有效
   */
  static verifyToken(token: string): boolean {
    try {
      const actualToken = token.startsWith('Bearer ') ? token.replace('Bearer ', '') : token;
      const parts = actualToken.split('.');
      if (parts.length !== 3) {
        return false;
      }

      const [, payloadBase64] = parts;
      const payload = JSON.parse(Buffer.from(payloadBase64, 'base64').toString());
      const now = Math.floor(Date.now() / 1000);

      return payload.exp > now;
    } catch {
      return false;
    }
  }
}

export const menuService = MenuService;