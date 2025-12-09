import request from '../../index.ts';

const MENU_PREFIX: string = '/menu';

/**
 * 获取菜单树列表
 * @returns 菜单树列表
 */
export const getMenuTreeListApi = async () => {
  const response = await request.get(`${MENU_PREFIX}/menu-tree-list`);
  return response.data;
};
