import fs from 'fs';
import path from 'path';
import type { MenuItem, MenuTreeNode } from './types/menu';

/**
 * 菜单仓库类
 */
export class MenuRepository {
  private static menuDataPath = path.join(process.cwd(), 'mocks/database/system-menu.json');

  /**
   * 获取所有菜单（扁平化处理）
   * @returns 菜单项数组
   */
  static getAllMenus(): MenuItem[] {
    try {
      const data = fs.readFileSync(this.menuDataPath, 'utf-8');
      const menuData = JSON.parse(data) as MenuItem[];
      return this.flattenMenus(menuData);
    } catch (error) {
      console.error('读取菜单数据失败:', error);
      return [];
    }
  }

  /**
   * 扁平化菜单数据
   * @param menus 嵌套菜单数据
   * @returns 扁平化菜单数组
   */
  private static flattenMenus(menus: MenuItem[]): MenuItem[] {
    const result: MenuItem[] = [];
    
    const flatten = (menuList: MenuItem[]) => {
      menuList.forEach(menu => {
        // 添加当前菜单项（不包含children）
        const { children, ...menuWithoutChildren } = menu;
        result.push(menuWithoutChildren as MenuItem);
        
        // 递归处理子菜单
        if (children && children.length > 0) {
          flatten(children);
        }
      });
    };
    
    flatten(menus);
    return result;
  }

  /**
   * 根据用户角色获取菜单
   * @param roles 用户角色数组
   * @returns 过滤后的菜单数据
   */
  static getMenusByRoles(roles: string[]): MenuItem[] {
    const allMenus = this.getAllMenus();
    return this.filterMenusByRoles(allMenus, roles);
  }

  /**
   * 根据角色过滤菜单
   * @param menus 菜单数组
   * @param roles 用户角色数组
   * @returns 过滤后的菜单数组
   */
  private static filterMenusByRoles(menus: MenuItem[], roles: string[]): MenuItem[] {
    return menus.filter(menu => {
      // 如果菜单没有角色限制，则显示
      if (!menu.roles || menu.roles.length === 0) {
        return true;
      }
      
      // 检查用户角色是否包含菜单所需的角色
      const hasPermission = menu.roles.some(role => roles.includes(role));
      
      if (hasPermission && menu.children && menu.children.length > 0) {
        // 递归过滤子菜单
        menu.children = this.filterMenusByRoles(menu.children, roles);
      }
      
      return hasPermission;
    });
  }

  /**
   * 构建菜单树
   * @param menus 菜单数组
   * @returns 菜单树数组
   */
  static buildMenuTree(menus: MenuItem[]): MenuTreeNode[] {
    // 创建菜单映射
    const menuMap = new Map<string, MenuTreeNode>();
    const rootMenus: MenuTreeNode[] = [];

    // 初始化所有菜单节点
    menus.forEach(menu => {
      menuMap.set(menu.id, { ...menu, children: [] });
    });

    // 构建树形结构
    menus.forEach(menu => {
      const menuNode = menuMap.get(menu.id);
      if (!menuNode) return;

      if (!menu.parentId || menu.parentId === '') {
        // 根节点
        rootMenus.push(menuNode);
      } else {
        // 子节点
        const parentNode = menuMap.get(menu.parentId);
        if (parentNode) {
          parentNode.children.push(menuNode);
        }
      }
    });

    // 按order字段排序
    this.sortMenuTree(rootMenus);
    
    return rootMenus;
  }

  /**
   * 对菜单树进行排序
   * @param menus 菜单树数组
   */
  private static sortMenuTree(menus: MenuTreeNode[]): void {
    menus.sort((a, b) => (a.order || 0) - (b.order || 0));
    
    menus.forEach(menu => {
      if (menu.children && menu.children.length > 0) {
        this.sortMenuTree(menu.children);
      }
    });
  }

  /**
   * 根据菜单ID获取菜单
   * @param id 菜单ID
   * @returns 菜单项或null
   */
  static getMenuById(id: string): MenuItem | null {
    const allMenus = this.getAllMenus();
    return this.findMenuById(allMenus, id);
  }

  /**
   * 递归查找菜单
   * @param menus 菜单数组
   * @param id 菜单ID
   * @returns 菜单项或null
   */
  private static findMenuById(menus: MenuItem[], id: string): MenuItem | null {
    for (const menu of menus) {
      if (menu.id === id) {
        return menu;
      }
      
      if (menu.children && menu.children.length > 0) {
        const found = this.findMenuById(menu.children, id);
        if (found) {
          return found;
        }
      }
    }
    
    return null;
  }
}