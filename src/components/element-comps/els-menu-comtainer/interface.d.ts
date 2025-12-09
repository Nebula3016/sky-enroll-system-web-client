import type { LayoutPatternEnum } from './index.enum';

/**
 * @name ElsMenuContainerPropsInterface
 * @description 自定义菜单容器组件属性类型接口
 */
export interface ElsMenuContainerPropsInterface {
  /**
   * @description 布局类型
   */
  layoutPattern?: LayoutPatternEnum;

  /**
   * @description 菜单列表
   */
  menuList: Record<string, any>[];
}

/**
 * @interface VerticalMenuPropsInterface
 * @description 垂直菜单组件属性类型接口
 */
export interface VerticalMenuPropsInterface {
  menuList: Record<string, any>[];
}

/**
 * @interface ElMenuPropsInterface
 * @description 垂直菜单组件属性类型接口
 */
export interface ElMenuPropsInterface {
  /** 菜单展示模式 */
  mode?: LayoutPatternEnum;
  /** 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用） */
  collapse?: boolean;
  /** 是否省略多余的子项（仅在横向模式生效） */
  ellipsis?: boolean;
  /** 自定义省略图标 (仅在水平模式下可用) */
  ellipsisIcon?: string | Component;
  /** 弹出层的偏移量(对所有子菜单有效) */
  popperOffset?: number;
  /** 页面加载时默认激活菜单的 index */
  defaultActive?: string;
  /** 默认打开的 sub-menu 的 index 的数组 */
  defaultOpeneds?: string[];
  /** 是否只保持一个子菜单的展开 */
  uniqueOpened?: boolean;
  /** 子菜单打开的触发方式，只在 mode 为 horizontal 时有效 */
  menuTrigger?: 'hover' | 'click';
  /** 是否启用 vue-router 模式。启用该模式会在激活导航时以 index 作为 path 进行路由跳转，使用 default-active 来设置加载时的激活项 */
  router?: boolean;
  /** 是否开启折叠动画 */
  collapseTransition?: boolean;
  /** Tooltip 主题，内置了 dark / light 两种主题，当菜单折叠时生效 */
  popperEffect?: 'dark' | 'light' | string;
  /** 可选，单击外部时是否折叠菜单 */
  closeOnClickOutside?: boolean;
  /** 为 popper 添加类名 */
  popperClass?: string;
  /** 为 popper 添加自定义样式 */
  popperStyle?: string | Record<string, any>;
  /** 菜单出现前的延迟 */
  showTimeout?: number;
  /** 菜单消失前的延迟 */
  hideTimeout?: number;
  /** 当菜单处于非活动状态且 persistent 为 false 时，下拉菜单将被销毁 */
  persistent?: boolean;
}

/**
 * @interface ElMenuEventPropsInterface
 * @description 垂直菜单组件事件类型接口
 */
export interface ElMenuEventPropsInterface {
  /** 菜单激活回调 */
  select?: (index: string, indexPath: string[]) => void;

  /** sub-menu 展开的回调 */
  open?: (index: string, indexPath: string[]) => void;

  /** sub-menu 收起的回调 */
  close?: (index: string, indexPath: string[]) => void;
}

/**
 * @interface ElMenuItemPropsInterface
 * @description 垂直菜单组件子菜单属性类型接口
 */
export interface ElMenuItemPropsInterface {
  /** 唯一标志 */
  index: string;
  /** Vue Route 路由位置参数 */
  route?: string | object;
  /** 是否禁用 */
  disabled?: boolean;
}

/**
 * @interface ElSubMenuPropsInterface
 * @description 垂直菜单组件子菜单属性类型接口
 */
export interface ElSubMenuPropsInterface {
  /** 唯一标志 */
  index: string;
  /** 为 popper 添加类名 */
  popperClass?: string;
  /** 子菜单出现之前的延迟，(继承 menu 的 show-timeout 配置) */
  showTimeout?: number;
  /** 子菜单消失之前的延迟，(继承 menu 的 hide-timeout 配置) */
  hideTimeout?: number;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否将弹出菜单挂载到 body 上，第一级SubMenu默认值为 true，其他SubMenus 的值为 false */
  teleported?: boolean;
  /** 弹出窗口的偏移量 (覆盖 popper的菜单) */
  popperOffset?: number;
  /** 父菜单展开且子菜单关闭时的图标， expand-close-icon 和 expand-open-icon 需要一起配置才能生效 */
  expandCloseIcon?: string | Component;
  /** 父菜单展开且子菜单打开时的图标， expand-open-icon 和 expand-close-icon 需要一起配置才能生效 */
  expandOpenIcon?: string | Component;
  /** 父菜单收起且子菜单关闭时的图标， collapse-close-icon 和 collapse-open-icon 需要一起配置才能生效 */
  collapseCloseIcon?: string | Component;
  /** 父菜单收起且子菜单打开时的图标， collapse-open-icon 和 collapse-close-icon 需要一起配置才能生效 */
  collapseOpenIcon?: string | Component;
}

/**
 * @interface ElMenuItemGroupPropsInterface
 * @description 垂直菜单组件子菜单分组属性类型接口
 */
export interface ElMenuItemGroupPropsInterface {
  /** 组标题 */
  title: string;
}
