import {
  ElsMenuContainerPropsInterface,
  VerticalMenuPropsInterface,
  ElMenuItemGroupPropsInterface,
  ElMenuPropsInterface,
  ElSubMenuPropsInterface,
  ElMenuEventPropsInterface,
} from './interface';

/**
 * @name ElsMenuContainerPropsTypes
 * @description 自定义菜单容器组件属性类型接口
 */
export type ElsMenuContainerPropsTypes = {
  /**
   * @description 布局类型
   */
  elsMenuContainerProps?: ElsMenuContainerPropsInterface;
};

/**
 * @name VerticalMenuPropsTypes
 * @description 垂直菜单组件属性类型接口
 */
export type VerticalMenuPropsTypes = {
  /**
   * @description 垂直菜单组件属性
   */
  verticalMenuProps?: VerticalMenuPropsInterface;
  /**
   * @description 垂直菜单子项分组组件属性
   */
  elMenuItemGroupProps?: ElMenuItemGroupPropsInterface;
  /**
   * @description 垂直菜单组件属性
   */
  elMenuProps?: ElMenuPropsInterface;
  /**
   * @description 垂直菜单子项组件属性
   */
  elMenuItemProps?: ElMenuItemPropsInterface;
  /**
   * @description 垂直菜单子项组件属性
   */
  elSubMenuProps?: ElSubMenuPropsInterface;
  /**
   * @description 垂直菜单事件组件属性
   */
  elMenuEventProps?: ElMenuEventPropsInterface;
};
