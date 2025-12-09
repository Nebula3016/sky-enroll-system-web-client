import { menuService } from './service';
import type { GetMenuTreeListResponse } from './types/menu';

/**
 * 获取菜单树列表控制器
 * @param req 请求对象
 * @returns 菜单树列表响应
 */
export function getMenuTreeList(req: { headers?: any }): GetMenuTreeListResponse {
  try {
    // 从请求头获取 token（可选）
    const authorization = req.headers?.authorization || req.headers?.Authorization;
    let token: string | undefined;

    if (authorization) {
      // 提取token（支持Bearer格式）
      token = authorization.startsWith('Bearer ')
        ? authorization.replace('Bearer ', '')
        : authorization;
    }

    // 调用服务层获取菜单树列表
    return menuService.getMenuTreeList(token);
  } catch (error) {
    console.error('获取菜单树列表失败:', error);
    return {
      code: 0,
      message: '获取菜单树列表失败',
      data: []
    };
  }
}
