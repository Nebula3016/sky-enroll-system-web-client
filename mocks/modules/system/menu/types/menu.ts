/**
 * 菜单类型定义
 */

/**
 * 菜单类型枚举
 */
export enum MenuType {
  ROOT = 'ROOT',     // 根菜单
  ROUTE = 'ROUTE',   // 路由菜单
  BUTTON = 'BUTTON', // 按钮权限
}

/**
 * 菜单元数据
 */
export interface MenuMeta {
  /** 是否需要认证 */
  requireAuth: boolean;
  /** 是否隐藏 */
  hidden: boolean;
  /** 是否保持活跃状态 */
  keepAlive: boolean;
}

/**
 * 菜单项接口
 */
export interface MenuItem {
  /** 菜单ID */
  id: string;
  /** 父级菜单ID */
  parentId: string;
  /** 菜单路径 */
  path: string;
  /** 菜单编码 */
  code: string;
  /** 菜单名称 */
  name: string;
  /** 菜单类型 */
  type: MenuType;
  /** 菜单图标 */
  icon: string;
  /** 重定向路径 */
  redirect: string;
  /** 子菜单列表 */
  children: MenuItem[];
  /** 排序 */
  order: number;
  /** 角色权限 */
  roles: string[];
  /** 元数据 */
  meta: MenuMeta;
  /** 目标窗口 */
  target: string;
}

/**
 * 菜单树节点
 */
export interface MenuTreeNode extends MenuItem {
  /** 子节点 */
  children: MenuTreeNode[];
}

/**
 * 获取菜单树列表响应
 */
export interface GetMenuTreeListResponse {
  /** 响应码 */
  code: number;
  /** 响应消息 */
  message: string;
  /** 菜单树数据 */
  data: MenuTreeNode[];
}