import type {
  ElsMenuContainerPropsInterface,
  VerticalMenuPropsInterface,
  ElMenuPropsInterface,
  ElMenuItemPropsInterface,
  ElSubMenuPropsInterface,
  ElMenuItemGroupPropsInterface,
  ElMenuEventPropsInterface,
} from './interface';
import { LayoutPatternEnum } from './index.enum';

/**
 * @name elsMenuContainerPropsDefault
 * @description 自定义菜单容器组件默认属性
 */
export const elsMenuContainerPropsDefault: ElsMenuContainerPropsInterface = {
  layoutPattern: LayoutPatternEnum.Vertical,
  menuList: [],
};

/**
 * @name verticalMenuPropsDefault
 * @description 垂直菜单组件默认属性
 */
export const verticalMenuPropsDefault: VerticalMenuPropsInterface = {
  menuList: [],
};

/**
 * @name elMenuPropsDefault
 * @description Element Plus 菜单组件默认属性
 */
export const elMenuPropsDefault: ElMenuPropsInterface = {
  mode: LayoutPatternEnum.Vertical,
  collapse: false,
  ellipsis: true,
  popperOffset: 6,
  defaultActive: '',
  defaultOpeneds: [],
  uniqueOpened: false,
  menuTrigger: 'hover',
  router: false,
  collapseTransition: true,
  popperEffect: 'dark',
  closeOnClickOutside: false,
  popperClass: '',
  popperStyle: {},
  showTimeout: 300,
  hideTimeout: 300,
  persistent: true,
};

/**
 * @name elMenuItemPropsDefault
 * @description Element Plus 菜单项组件默认属性
 */
export const elMenuItemPropsDefault: ElMenuItemPropsInterface = {
  index: '',
  route: '',
  disabled: false,
};

/**
 * @name elSubMenuPropsDefault
 * @description Element Plus 子菜单组件默认属性
 */
export const elSubMenuPropsDefault: ElSubMenuPropsInterface = {
  index: '',
  popperClass: '',
  showTimeout: 300,
  hideTimeout: 300,
  disabled: false,
  teleported: false,
  popperOffset: 6,
};

/**
 * @name elMenuItemGroupPropsDefault
 * @description Element Plus 菜单项分组组件默认属性
 */
export const elMenuItemGroupPropsDefault: ElMenuItemGroupPropsInterface = {
  title: '',
};

/**
 * @name elMenuEventPropsDefault
 * @description Element Plus 菜单事件默认属性
 */
export const elMenuEventPropsDefault: ElMenuEventPropsInterface = {
  select: undefined,
  open: undefined,
  close: undefined,
};
