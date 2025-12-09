/**
 * @enum RouterHistoryModeEnum
 * @description 路由相关枚举定义
 */
export enum RouterHistoryModeEnum {
  /**
   * @description hash模式
   */
  HASH = 'hash',
  /**
   * @description hash模式，带base
   */
  HASH_BASE = 'hash,base',
  /**
   * @description history模式
   */
  HISTORY = 'history',
  /**
   * @description history模式，带base
   */
  HISTORY_BASE = 'history,base',
}

/**
 * @enum SystemRouterClassifyEnum
 * @description 系统路由路径枚举定义
 */
export enum SystemRouterClassifyEnum {
  /**
   * @description 系统路由路径分类
   */
  SYSTEM = 'system',

  /**
   * @description 业务路由路径分类
   */
  BUSINESS = 'business',

  /**
   * @description 其它路由路径分类
   */
  OTHER = 'other',
}

/**
 * @enum SystemRouterTypeEnum
 * @description 系统路由类型枚举定义
 */
export enum SystemRouterTypeEnum {
  /**
   * @description 系统路由类型：根路由（虚拟概念，用于前端将一级菜单挂载到layout组件下的）
   */
  ROOT = 'root',
  /**
   * @description 系统路由类型：目录
   */
  CATALOG = 'catalog',
  /**
   * @description 系统路由类型：菜单
   */
  MENU = 'menu',
  /**
   * @description 系统路由类型：按钮
   */
  BUTTON = 'button',
  /**
   * @description 系统路由类型：外链
   */
  EXTERNAL = 'external',
}
